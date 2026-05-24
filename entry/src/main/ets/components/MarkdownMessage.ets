import { MarkdownBlockNode, MarkdownBlockType, MarkdownInlineNode, MarkdownInlineType } from '../models/MarkdownModels';
import { MarkdownService } from '../services/MarkdownService';

@Component
export struct MarkdownMessage {
  private readonly markdownService: MarkdownService = new MarkdownService();
  private static readonly MAX_RENDER_TEXT_LENGTH: number = 12000;
  @Prop text: string;
  @Prop isSelf: boolean;

  private textColor(): string {
    return this.isSelf ? '#FFFFFF' : '#111827';
  }

  private secondaryTextColor(): string {
    return this.isSelf ? '#DCEBFF' : '#667085';
  }

  private codeBackground(): string {
    return this.isSelf ? '#2D6FD2' : '#EEF2F6';
  }

  private linkColor(): string {
    return this.isSelf ? '#FFFFFF' : '#1769FF';
  }

  private blocks(): MarkdownBlockNode[] {
    if (this.text.length > MarkdownMessage.MAX_RENDER_TEXT_LENGTH) {
      return [];
    }
    return this.markdownService.parse(this.text);
  }

  private shouldRenderPlainText(): boolean {
    return this.text.length === 0 || this.text.length > MarkdownMessage.MAX_RENDER_TEXT_LENGTH;
  }

  @Builder
  inlineNodes(inlines: MarkdownInlineNode[]) {
    ForEach(inlines, (item: MarkdownInlineNode, index: number) => {
      if (item.type === MarkdownInlineType.BOLD) {
        Span(item.text)
          .fontWeight(FontWeight.Bold)
          .fontColor(this.textColor())
      } else if (item.type === MarkdownInlineType.ITALIC) {
        Span(item.text)
          .fontStyle(FontStyle.Italic)
          .fontColor(this.textColor())
      } else if (item.type === MarkdownInlineType.CODE) {
        Span(item.text)
          .fontColor(this.textColor())
          .backgroundColor(this.codeBackground())
      } else if (item.type === MarkdownInlineType.LINK) {
        Span(item.text)
          .fontColor(this.linkColor())
      } else {
        Span(item.text)
          .fontColor(this.textColor())
      }
    }, (item: MarkdownInlineNode, index: number) => `${item.type}_${index}_${item.text}`)
  }

  @Builder
  paragraphBlock(block: MarkdownBlockNode) {
    Text() {
      this.inlineNodes(block.inlines)
    }
    .fontSize(15)
    .fontColor(this.textColor())
    .lineHeight(23)
    .margin({ bottom: 6 })
  }

  @Builder
  headingBlock(block: MarkdownBlockNode) {
    Text() {
      this.inlineNodes(block.inlines)
    }
    .fontSize(block.level <= 2 ? 18 : 16)
    .fontWeight(FontWeight.Bold)
    .fontColor(this.textColor())
    .lineHeight(26)
    .margin({ bottom: 6 })
  }

  @Builder
  quoteBlock(block: MarkdownBlockNode) {
    Row({ space: 10 }) {
      Column()
        .width(3)
        .height('100%')
        .backgroundColor(this.isSelf ? '#B8D6FF' : '#D0D7E2')
        .borderRadius(2)

      Text() {
        this.inlineNodes(block.inlines)
      }
      .fontSize(15)
      .fontColor(this.secondaryTextColor())
      .lineHeight(23)
      .layoutWeight(1)
    }
    .width('100%')
    .alignItems(VerticalAlign.Top)
    .margin({ bottom: 6 })
  }

  @Builder
  listBlock(block: MarkdownBlockNode) {
    Column({ space: 4 }) {
      ForEach(block.items, (item: MarkdownInlineNode[], index: number) => {
        Row({ space: 8 }) {
          Text('•')
            .fontSize(15)
            .fontColor(this.textColor())
            .margin({ top: 1 })
          Text() {
            this.inlineNodes(item)
          }
          .fontSize(15)
          .fontColor(this.textColor())
          .lineHeight(23)
          .layoutWeight(1)
        }
        .width('100%')
        .alignItems(VerticalAlign.Top)
      }, (_item: MarkdownInlineNode[], index: number) => `list_${index}`)
    }
    .width('100%')
    .margin({ bottom: 6 })
  }

  @Builder
  codeBlock(block: MarkdownBlockNode) {
    Text(block.code)
      .width('100%')
      .fontSize(13)
      .fontColor(this.textColor())
      .fontFamily('monospace')
      .lineHeight(20)
      .padding({ left: 10, right: 10, top: 8, bottom: 8 })
      .backgroundColor(this.codeBackground())
      .borderRadius(10)
      .margin({ bottom: 6 })
      .textAlign(TextAlign.Start)
      .copyOption(CopyOptions.LocalDevice)
  }

  @Builder
  blockNode(block: MarkdownBlockNode) {
    Column() {
      if (block.type === MarkdownBlockType.HEADING) {
        this.headingBlock(block)
      } else if (block.type === MarkdownBlockType.QUOTE) {
        this.quoteBlock(block)
      } else if (block.type === MarkdownBlockType.LIST) {
        this.listBlock(block)
      } else if (block.type === MarkdownBlockType.CODE) {
        this.codeBlock(block)
      } else {
        this.paragraphBlock(block)
      }
    }
    .width('100%')
    .alignItems(HorizontalAlign.Start)
  }

  build() {
    Column({ space: 0 }) {
      if (this.shouldRenderPlainText()) {
        Text(this.text)
          .width('100%')
          .fontSize(15)
          .fontColor(this.textColor())
          .lineHeight(23)
          .textAlign(TextAlign.Start)
          .copyOption(CopyOptions.LocalDevice)
      } else {
        ForEach(this.blocks(), (block: MarkdownBlockNode, index: number) => {
          this.blockNode(block)
        }, (block: MarkdownBlockNode, index: number) => `${block.type}_${index}`)
      }
    }
    .width('100%')
    .alignItems(HorizontalAlign.Start)
  }
}
