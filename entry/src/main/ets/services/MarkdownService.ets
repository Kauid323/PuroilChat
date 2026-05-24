import { MarkdownBlockNode, MarkdownBlockType, MarkdownInlineNode, MarkdownInlineType, MarkdownParseResult } from '../models/MarkdownModels';

const MAX_MARKDOWN_SOURCE_LENGTH: number = 12000;
const MAX_MARKDOWN_LINES: number = 400;
const MAX_MARKDOWN_BLOCKS: number = 200;
const MAX_MARKDOWN_INLINE_NODES: number = 800;

export class MarkdownService {
  parse(source: string): MarkdownBlockNode[] {
    const normalized: string = this.normalizeSource(source);
    if (normalized.length === 0) {
      return [];
    }

    const lines: string[] = this.limitLines(normalized.split('\n'));
    const blocks: MarkdownBlockNode[] = [];
    let index: number = 0;

    while (index < lines.length && blocks.length < MAX_MARKDOWN_BLOCKS) {
      const line: string = lines[index];
      if (line.trim().length === 0) {
        index += 1;
        continue;
      }

      if (line.startsWith('```')) {
        const result: MarkdownParseResult = this.parseCodeBlock(lines, index);
        blocks.push(result.block);
        index = result.nextIndex;
        continue;
      }

      if (this.isHeadingLine(line)) {
        blocks.push(this.parseHeading(line));
        index += 1;
        continue;
      }

      if (this.isQuoteLine(line)) {
        const result: MarkdownParseResult = this.parseQuote(lines, index);
        blocks.push(result.block);
        index = result.nextIndex;
        continue;
      }

      if (this.isListLine(line)) {
        const result: MarkdownParseResult = this.parseList(lines, index);
        blocks.push(result.block);
        index = result.nextIndex;
        continue;
      }

      const result: MarkdownParseResult = this.parseParagraph(lines, index);
      blocks.push(result.block);
      index = result.nextIndex;
    }

    return blocks;
  }

  private normalizeSource(source: string): string {
    if (source.length <= MAX_MARKDOWN_SOURCE_LENGTH) {
      return source.replaceAll('\r\n', '\n');
    }
    return source.slice(0, MAX_MARKDOWN_SOURCE_LENGTH).replaceAll('\r\n', '\n');
  }

  private limitLines(lines: string[]): string[] {
    if (lines.length <= MAX_MARKDOWN_LINES) {
      return lines;
    }
    const limited: string[] = [];
    for (let i = 0; i < MAX_MARKDOWN_LINES; i++) {
      limited.push(lines[i]);
    }
    return limited;
  }

  private isHeadingLine(line: string): boolean {
    let index: number = 0;
    while (index < line.length && index < 6 && line.charCodeAt(index) === 35) {
      index += 1;
    }
    return index > 0 && index < line.length && line.charCodeAt(index) === 32;
  }

  private isQuoteLine(line: string): boolean {
    let index: number = 0;
    while (index < line.length && this.isWhitespace(line.charCodeAt(index))) {
      index += 1;
    }
    return index < line.length && line.charCodeAt(index) === 62;
  }

  private isListLine(line: string): boolean {
    let index: number = 0;
    while (index < line.length && this.isWhitespace(line.charCodeAt(index))) {
      index += 1;
    }
    if (index >= line.length) {
      return false;
    }
    const marker: number = line.charCodeAt(index);
    if ((marker === 45 || marker === 42) && index + 1 < line.length && line.charCodeAt(index + 1) === 32) {
      return true;
    }
    let digitStart: number = index;
    while (digitStart < line.length && this.isDigit(line.charCodeAt(digitStart))) {
      digitStart += 1;
    }
    return digitStart > index && digitStart + 1 < line.length && line.charCodeAt(digitStart) === 46 &&
      line.charCodeAt(digitStart + 1) === 32;
  }

  private parseHeading(line: string): MarkdownBlockNode {
    let level: number = 0;
    while (level < line.length && level < 6 && line.charCodeAt(level) === 35) {
      level += 1;
    }
    const text: string = level < line.length ? line.slice(level + 1) : line;
    const block: MarkdownBlockNode = new MarkdownBlockNode();
    block.type = MarkdownBlockType.HEADING;
    block.level = level > 0 ? level : 1;
    block.inlines = this.parseInline(text);
    return block;
  }

  private parseQuote(lines: string[], startIndex: number): MarkdownParseResult {
    const chunks: string[] = [];
    let index: number = startIndex;
    while (index < lines.length && this.isQuoteLine(lines[index])) {
      chunks.push(this.stripQuotePrefix(lines[index]));
      index += 1;
    }
    const block: MarkdownBlockNode = new MarkdownBlockNode();
    block.type = MarkdownBlockType.QUOTE;
    block.inlines = this.parseInline(chunks.join('\n'));
    const result: MarkdownParseResult = new MarkdownParseResult();
    result.block = block;
    result.nextIndex = index;
    return result;
  }

  private stripQuotePrefix(line: string): string {
    let index: number = 0;
    while (index < line.length && this.isWhitespace(line.charCodeAt(index))) {
      index += 1;
    }
    if (index < line.length && line.charCodeAt(index) === 62) {
      index += 1;
    }
    if (index < line.length && line.charCodeAt(index) === 32) {
      index += 1;
    }
    return line.slice(index);
  }

  private parseList(lines: string[], startIndex: number): MarkdownParseResult {
    const block: MarkdownBlockNode = new MarkdownBlockNode();
    block.type = MarkdownBlockType.LIST;
    let index: number = startIndex;
    while (index < lines.length && this.isListLine(lines[index]) && block.items.length < MAX_MARKDOWN_INLINE_NODES) {
      block.items.push(this.parseInline(this.stripListPrefix(lines[index])));
      index += 1;
    }
    const result: MarkdownParseResult = new MarkdownParseResult();
    result.block = block;
    result.nextIndex = index;
    return result;
  }

  private stripListPrefix(line: string): string {
    let index: number = 0;
    while (index < line.length && this.isWhitespace(line.charCodeAt(index))) {
      index += 1;
    }
    if (index < line.length && (line.charCodeAt(index) === 45 || line.charCodeAt(index) === 42)) {
      index += 1;
      if (index < line.length && line.charCodeAt(index) === 32) {
        index += 1;
      }
      return line.slice(index);
    }
    while (index < line.length && this.isDigit(line.charCodeAt(index))) {
      index += 1;
    }
    if (index < line.length && line.charCodeAt(index) === 46) {
      index += 1;
    }
    if (index < line.length && line.charCodeAt(index) === 32) {
      index += 1;
    }
    return line.slice(index);
  }

  private parseCodeBlock(lines: string[], startIndex: number): MarkdownParseResult {
    const chunks: string[] = [];
    let index: number = startIndex + 1;
    while (index < lines.length && !lines[index].startsWith('```') && chunks.length < MAX_MARKDOWN_LINES) {
      chunks.push(lines[index]);
      index += 1;
    }
    const block: MarkdownBlockNode = new MarkdownBlockNode();
    block.type = MarkdownBlockType.CODE;
    block.code = chunks.join('\n');
    const result: MarkdownParseResult = new MarkdownParseResult();
    result.block = block;
    result.nextIndex = index < lines.length ? index + 1 : index;
    return result;
  }

  private parseParagraph(lines: string[], startIndex: number): MarkdownParseResult {
    const chunks: string[] = [];
    let index: number = startIndex;
    while (index < lines.length && chunks.length < MAX_MARKDOWN_LINES) {
      const line: string = lines[index];
      if (line.trim().length === 0) {
        break;
      }
      if (line.startsWith('```') || this.isHeadingLine(line) || this.isQuoteLine(line) || this.isListLine(line)) {
        break;
      }
      chunks.push(line);
      index += 1;
    }
    const block: MarkdownBlockNode = new MarkdownBlockNode();
    block.type = MarkdownBlockType.PARAGRAPH;
    block.inlines = this.parseInline(chunks.join('\n'));
    const result: MarkdownParseResult = new MarkdownParseResult();
    result.block = block;
    result.nextIndex = index;
    return result;
  }

  private parseInline(source: string): MarkdownInlineNode[] {
    const nodes: MarkdownInlineNode[] = [];
    let index: number = 0;

    while (index < source.length && nodes.length < MAX_MARKDOWN_INLINE_NODES) {
      const linkEnd: number = this.findLinkEnd(source, index);
      if (linkEnd > index) {
        const textEnd: number = source.indexOf(']', index + 1);
        const urlStart: number = textEnd + 2;
        const urlEnd: number = linkEnd - 1;
        const node: MarkdownInlineNode = new MarkdownInlineNode();
        node.type = MarkdownInlineType.LINK;
        node.text = source.slice(index + 1, textEnd);
        node.href = source.slice(urlStart, urlEnd);
        nodes.push(node);
        index = linkEnd;
        continue;
      }

      const boldEnd: number = this.findWrappedEnd(source, index, '**');
      if (boldEnd > index) {
        const node: MarkdownInlineNode = new MarkdownInlineNode();
        node.type = MarkdownInlineType.BOLD;
        node.text = source.slice(index + 2, boldEnd - 2);
        nodes.push(node);
        index = boldEnd;
        continue;
      }

      const italicEnd: number = this.findWrappedEnd(source, index, '*');
      if (italicEnd > index) {
        const node: MarkdownInlineNode = new MarkdownInlineNode();
        node.type = MarkdownInlineType.ITALIC;
        node.text = source.slice(index + 1, italicEnd - 1);
        nodes.push(node);
        index = italicEnd;
        continue;
      }

      const codeEnd: number = this.findWrappedEnd(source, index, '`');
      if (codeEnd > index) {
        const node: MarkdownInlineNode = new MarkdownInlineNode();
        node.type = MarkdownInlineType.CODE;
        node.text = source.slice(index + 1, codeEnd - 1);
        nodes.push(node);
        index = codeEnd;
        continue;
      }

      const nextSpecialIndex: number = this.findNextSpecialIndex(source, index);
      const plainEnd: number = nextSpecialIndex < 0 ? source.length : nextSpecialIndex;
      const node: MarkdownInlineNode = new MarkdownInlineNode();
      node.type = MarkdownInlineType.TEXT;
      node.text = source.slice(index, plainEnd);
      nodes.push(node);
      index = plainEnd > index ? plainEnd : index + 1;
    }

    if (nodes.length === 0) {
      const node: MarkdownInlineNode = new MarkdownInlineNode();
      node.type = MarkdownInlineType.TEXT;
      node.text = source;
      nodes.push(node);
    }

    return nodes;
  }

  private findLinkEnd(source: string, index: number): number {
    if (source.charCodeAt(index) !== 91) {
      return -1;
    }
    const textEnd: number = source.indexOf(']', index + 1);
    if (textEnd < 0 || textEnd + 2 >= source.length || source.charCodeAt(textEnd + 1) !== 40) {
      return -1;
    }
    const urlEnd: number = source.indexOf(')', textEnd + 2);
    if (urlEnd < 0) {
      return -1;
    }
    return urlEnd + 1;
  }

  private findWrappedEnd(source: string, index: number, token: string): number {
    if (!source.startsWith(token, index)) {
      return -1;
    }
    const searchStart: number = index + token.length;
    const end: number = source.indexOf(token, searchStart);
    if (end < 0 || end === searchStart) {
      return -1;
    }
    return end + token.length;
  }

  private findNextSpecialIndex(source: string, start: number): number {
    const tokens: string[] = ['[', '*', '`'];
    let result: number = -1;
    for (let i = 0; i < tokens.length; i++) {
      const index: number = source.indexOf(tokens[i], start);
      if (index >= 0 && (result < 0 || index < result)) {
        result = index;
      }
    }
    return result;
  }

  private isWhitespace(code: number): boolean {
    return code === 32 || code === 9;
  }

  private isDigit(code: number): boolean {
    return code >= 48 && code <= 57;
  }
}
