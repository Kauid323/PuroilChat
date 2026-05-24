export enum MarkdownBlockType {
  PARAGRAPH = 'paragraph',
  HEADING = 'heading',
  QUOTE = 'quote',
  LIST = 'list',
  CODE = 'code'
}

export enum MarkdownInlineType {
  TEXT = 'text',
  BOLD = 'bold',
  ITALIC = 'italic',
  CODE = 'code',
  LINK = 'link'
}

export class MarkdownInlineNode {
  type: MarkdownInlineType = MarkdownInlineType.TEXT;
  text: string = '';
  href: string = '';
}

export class MarkdownBlockNode {
  type: MarkdownBlockType = MarkdownBlockType.PARAGRAPH;
  level: number = 0;
  inlines: MarkdownInlineNode[] = [];
  items: MarkdownInlineNode[][] = [];
  code: string = '';
}

export class MarkdownParseResult {
  block: MarkdownBlockNode = new MarkdownBlockNode();
  nextIndex: number = 0;
}
