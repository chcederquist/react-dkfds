import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardActionButtons,
  CardContent,
  CardHeading,
  CardSubHeading,
} from "../../components/Card/Card";
import { Button } from "../../components/Button/Button";

const meta = {
  title: "DKFDS/Card",
  argTypes: {
    children: { type: "function" },
  },
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainCard: Story = {
  args: {
    children: (
      <CardContent
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
      >
        <p>
          Dette er et <em>tekstområde</em>, hvor du kan skrive hvad du har lyst
          til
        </p>
      </CardContent>
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
      <CardContent heading={<CardHeading level="h2">Header</CardHeading>}>
        <p>Dette card linker til en side, der åbner i en ny fane</p>
      </CardContent>
    ),
  },
};

export const MultipleLinkCards: Story = {
  args: {
    children: undefined,
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
          <CardContent heading={<CardHeading level="h2">Lorem</CardHeading>}>
            <p>Dette card linker til en anden side</p>
          </CardContent>
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
          <CardContent heading={<CardHeading level="h2">Sit amet</CardHeading>}>
            <p>Dette card linker til en side, der åbner i en ny fane</p>
          </CardContent>
        </Card>
      </li>
      <li className="col-12 col-sm-6 col-md-4">
        <Card
          navigationProps={{
            href: "/",
          }}
        >
          <CardContent
            heading={<CardHeading level="h2">Ipsum dolor</CardHeading>}
          >
            <p>Dette card linker til en anden side.</p>
            <p>
              Der er ikke noget billede på dette eksempelcard. Normalt vil enten
              alle eller ingen cards i samme liste have billede
            </p>
          </CardContent>
        </Card>
      </li>
    </ul>
  ),
};
