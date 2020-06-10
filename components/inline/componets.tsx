import {
  BlocksControls,
  InlineTextarea,
  BlockComponentProps,
} from "react-tinacms-inline";

import { InlineWysiwyg } from "react-tinacms-editor";

import ReactMarkdown from "react-markdown";
export const heading_template = {
  type: "heading",
  label: "Heading",
  defaultItem: {
    text: "At vero eos et accusamus",
  },
  key: "heading-block",
  fields: [],
};

export const markdown_template = {
  type: "markdown",
  label: "Markdown",
  defaultItem: {
    rawMarkdown: "# this is a title",
  },
};

export function MarkdownBlock(props: BlockComponentProps) {
  return (
    <BlocksControls index={props.index}>
      <InlineWysiwyg name="rawMarkdown">
        <ReactMarkdown source={props.data.rawMarkdown} />
      </InlineWysiwyg>
    </BlocksControls>
  );
}
export function Heading(props: BlockComponentProps) {
  return (
    <BlocksControls index={props.index}>
      <div>
        <InlineTextarea name="text" />
      </div>
    </BlocksControls>
  );
}
