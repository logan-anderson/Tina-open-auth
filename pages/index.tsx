import Head from "next/head";
import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineForm,
  BlockComponentProps,
} from "react-tinacms-inline";
import { usePlugin } from "tinacms";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";

import { EditToggle } from "../components/inline/inline-ui";
import {
  Heading,
  heading_template,
  MarkdownBlock,
  markdown_template,
} from "../components/inline/componets";
import Layout from "../components/layout";

const PAGE_BLOCKS = {
  heading: {
    Component: Heading,
    template: heading_template,
  },
  markdown: {
    Component: MarkdownBlock,
    template: markdown_template,
  },
  // body_copy: {
  //   Component: BodyCopy,
  //   template: body_copy_template,
  // },
  // image: {
  //   Component: Image,
  //   template: image_template,
  // },
};

export default function Home({ file, preview }) {
  const formOptions = {
    label: "Home Page",
    fields: [
      {
        label: "Title",
        name: "title",
        component: "text",
      },
    ],
  };
  const [data, form] = useGithubJsonForm(file, formOptions);
  usePlugin(form);

  useGithubToolbarPlugins();

  return (
    <Layout preview={preview}>
      <h1 className="title">{data.title}</h1>
      <h3>{data.subtitle}</h3>
      <InlineForm form={form}>
        {preview && <EditToggle />}
        <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
      </InlineForm>
    </Layout>
  );
}

/**
 * Fetch data with getStaticProps based on 'preview' mode
 */
export const getStaticProps: GetStaticProps = async function ({
  preview,
  previewData,
}) {
  if (preview) {
    return getGithubPreviewProps({
      ...previewData,
      fileRelativePath: "content/home.json",
      parse: parseJson,
    });
  }
  return {
    props: {
      sourceProvider: null,
      error: null,
      preview: false,
      file: {
        fileRelativePath: "content/home.json",
        data: (await import("../content/home.json")).default,
      },
    },
  };
};
