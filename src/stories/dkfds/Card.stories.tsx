import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardActionButtons,
  CardContent,
  CardHeading,
  CardSubHeading,
  CardText,
} from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "DKFDS/Card",
  component: Card,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainCard: Story = {
  args: {
    children: (
      <CardContent
        text={
          <CardText>
            Dette er et <em>tekstområde</em>, hvor du kan skrive hvad du har
            lyst til
          </CardText>
        }
        heading={<CardHeading level="h2">Header</CardHeading>}
        subHeading={<CardSubHeading>Understøttende tekst</CardSubHeading>}
        cardActions={
          <CardActionButtons
            buttons={[
              <Button key={"1"} buttonType="secondary">
                Sekundær knap
              </Button>,
              <Button key={"2"} buttonType="tertiary">
                Tertiær knap
              </Button>,
            ]}
          ></CardActionButtons>
        }
      ></CardContent>
    ),
  },
};

export const NavigationCard: Story = {
  args: {
    navigationProps: {
      href: "/",
      isExternal: true,
      target: "_blank",
      rel: "noopener noreferrer",
    },
    children: (
      <CardContent
        text={
          <CardText>
            Dette card linker til en side, der åbner i en ny fane
          </CardText>
        }
        heading={<CardHeading level="h2">Header</CardHeading>}
      ></CardContent>
    ),
  },
};

export const MultipleLinkCards: Story = {
  args: {
    children: <></>,
  },
  render: () => (
    <ul className="row card-row">
      <li className="col-12 col-sm-6 col-md-4">
        <Card
          navigationProps={{
            href: "/",
          }}
          image={<img src="static/media/src/stories/assets/docs.png"></img>}
        >
          <CardContent
            text={<CardText>Dette card linker til en anden side</CardText>}
            heading={<CardHeading level="h2">Lorem</CardHeading>}
          ></CardContent>
        </Card>
      </li>
      <li className="col-12 col-sm-6 col-md-4">
        <Card
          navigationProps={{
            href: "/",
          }}
          image={
            <img src="static/media/src/stories/assets/accessibility.png"></img>
          }
        >
          <CardContent
            text={
              <CardText>
                Dette card linker til en side, der åbner i en ny fane
              </CardText>
            }
            heading={<CardHeading level="h2">Sit amet</CardHeading>}
          ></CardContent>
        </Card>
      </li>
      <li className="col-12 col-sm-6 col-md-4">
        <Card
          navigationProps={{
            href: "/",
          }}
        >
          <CardContent
            text={
              <CardText>
                Dette card linker til en anden side. <br />
                <br />
                Der er ikke noget billede på dette eksempelcard. Normalt vil
                enten alle eller ingen cards i samme liste have billede
              </CardText>
            }
            heading={<CardHeading level="h2">Ipsum dolor</CardHeading>}
          ></CardContent>
        </Card>
      </li>
    </ul>
  ),
};
