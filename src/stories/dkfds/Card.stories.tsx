import type { Meta, StoryObj } from "@storybook/react";

import {
  Card,
  CardActionButtons,
  CardActionLinks,
  CardContent,
  CardFooter,
  CardHeader,
  CardHeading,
  CardSubHeading,
  CardText,
} from "../../components/Card/Card";

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
      <>
        <CardHeader>
          <CardHeading level="h2">Header</CardHeading>
          <CardSubHeading>Understøttende tekst</CardSubHeading>
        </CardHeader>
        <CardText>
          <p>
            Dette er et <em>tekstområde</em>, hvor du kan skrive hvad du har
            lyst til
          </p>
        </CardText>
        <CardContent>
          <div className="row background-data-green-blue-300 p-6">
            <div className="col-12 col-md-6 col-lg-5 align-text-left mb-6 mb-md-0">
              <h2>Aliquam aliquet niboh faucibus varius</h2>
              <p>
                Aenean euismod vestibulum lacinia. Pellentesque nec nisi diam.
                Pellentesque nec urna vel ante ultrices facilisis sed in dolor.
                Curabitur eu leo semper, gravida justo at, euismod ex.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <CardActionButtons
            buttons={[
              {
                buttonType: "secondary",
                children: "Sekundærknap",
              },
              {
                buttonType: "tertiary",
                children: "Tertiærknap",
              },
            ]}
          ></CardActionButtons>
          <CardActionLinks
            links={[
              {
                children: "Et link til et sted i løsningen",
                href: "#1",
              },
              {
                children: <>Et link til et sted uden for løsningen</>,
                iconProps: {
                  icon: "open-in-new",
                },
                href: "#2",
              },
            ]}
          ></CardActionLinks>
        </CardFooter>
      </>
    ),
  },
};
