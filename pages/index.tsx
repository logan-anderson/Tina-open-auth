import Head from "next/head";
import {
  BlocksControls,
  InlineTextarea,
  InlineBlocks,
  InlineForm,
  BlockComponentProps,
} from "react-tinacms-inline";
import { getGithubPreviewProps, parseJson } from "next-tinacms-github";
import { GetStaticProps } from "next";
import {
  useGithubJsonForm,
  useGithubToolbarPlugins,
} from "react-tinacms-github";
import { EditToggle } from "../components/inline/inline-ui";

export const heading_template = {
  type: "heading",
  label: "Heading",
  defaultItem: {
    text: "At vero eos et accusamus",
  },
  key: "heading-block",
  fields: [],
};

export function Heading(props: BlockComponentProps) {
  return (
    <BlocksControls index={props.index}>
      <InlineTextarea name="text" />
    </BlocksControls>
  );
}

const PAGE_BLOCKS = {
  heading: {
    Component: Heading,
    template: heading_template,
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

  useGithubToolbarPlugins();

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">{data.title}</h1>
        <h3>{data.subtitle}</h3>
        <InlineForm form={form}>
          {preview && <EditToggle />}
          <InlineBlocks name="blocks" blocks={PAGE_BLOCKS} />
        </InlineForm>
      </main>
    </div>
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
