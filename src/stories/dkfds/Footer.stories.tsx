import type { Meta, StoryObj } from "@storybook/react";
import {
  Footer,
  FooterColumn,
  FooterGrid,
} from "../../components/Footer/Footer";
import { FunctionalLink } from "../../components/FunctionalLink/FunctionalLink";
import { Icon } from "../../components/Shared/Icon";
import { Heading } from "../../components/Shared/Heading";

const meta = {
  title: "DKFDS/Footer",
  component: Footer,
  parameters: {
    layout: "fullscreen",
  },
  subcomponents: { FunctionalLink, Icon, FooterColumn, FooterGrid },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainFooter: Story = {
  args: {
    children: (
      <ul className="align-text-left unstyled-list inline-list">
        <li>
          <strong className="weight-semibold">Digitaliseringsstyrelsen</strong>
        </li>
        <li>
          <FunctionalLink
            as="a"
            href="mailto:support@myndighed.dk"
            title="Skriv til Digitaliseringsstyrelsen"
          >
            support@myndighed.dk
          </FunctionalLink>
        </li>
        <li>
          <FunctionalLink
            as="a"
            href="tel:+4512345678"
            title="Ring til Digitaliseringsstyrelsen"
          >
            (+45) 12 34 56 78
          </FunctionalLink>
        </li>
        <li className="d-print-none">
          <FunctionalLink
            as="a"
            href="#"
            title="Tilgængelighedserklæring"
            className="icon-link"
          >
            Tilgængelighedserklæring
            <Icon icon="open-in-new" />
          </FunctionalLink>
        </li>
        <li className="d-print-none">
          <FunctionalLink as="a" href="#" className="function-link">
            Privatlivspolitik (cookies)
          </FunctionalLink>
        </li>
      </ul>
    ),
  },
};

export const ThreeColumnFooter: Story = {
  args: {
    children: (
      <FooterGrid>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className=" align-text-left ">
            <Heading level="h2" className="h5 mb-4">
              Ansvarlig myndighed
            </Heading>
            <ul className=" unstyled-list">
              <li>
                <p>
                  Digitaliseringsstyrelsen
                  <br />
                  Landgreven 4<br />
                  1413 København K
                </p>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className=" align-text-left ">
            <Heading level="h2" className="h5 mb-4">
              Webtilgængelighed og cookies
            </Heading>

            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Privatlivspolitik og cookies
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink
                  as="a"
                  href="#"
                  className="function-link icon-link"
                >
                  Tilgængelighedserklæring
                  <Icon icon="open-in-new" />
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={6} hideOnPrint>
          <div className=" align-text-left ">
            <Heading level="h2" className="h5 mb-4">
              Links
            </Heading>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse mattis, felis quis vestibulum aliquet, elit ex
              rhoncus.
            </p>

            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Læs lidt om dit
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Her er også lidt om dat
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
      </FooterGrid>
    ),
  },
};

export const FourColumnFooter: Story = {
  args: {
    children: (
      <FooterGrid>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className=" align-text-left ">
            <Heading level="h2" className="h5 mb-4">
              Ansvarlig myndighed
            </Heading>
            <ul className=" unstyled-list">
              <li>
                <p>Digitaliseringsstyrelsen</p>
              </li>

              <li>
                <p>Landgreven 4</p>
              </li>

              <li>
                <p>1413 København K</p>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Kontakt
            </Heading>

            <ul className="mt-0 nobullet-list">
              <li>
                <FunctionalLink
                  as="a"
                  className="function-link"
                  href="mailto:support@myndighed.dk"
                >
                  support@myndighed.dk
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink
                  as="a"
                  className="function-link"
                  href="tel:004512345678"
                >
                  (+45) 12 34 56 78
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Links
            </Heading>
            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Læs lidt om dit
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Her er også lidt om dat
                </FunctionalLink>
              </li>
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Eller måske er du interesseret i noget helt andet, som tager
                  mange linjer at forklare
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Webtilgængelighed og cookies
            </Heading>
            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Tilgængelighedserklæring
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Privatlivspolitik (cookies)
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
      </FooterGrid>
    ),
  },
};

export const ComplexFooter: Story = {
  args: {
    children: (
      <>
        <FooterGrid>
          <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
            <div className="align-text-left">
              <Heading level="h2" className="h5 mb-4">
                Links
              </Heading>
              <ul className=" mt-0 nobullet-list mb-0">
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Læs lidt om dit
                  </FunctionalLink>
                </li>

                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Her er også lidt om dat
                  </FunctionalLink>
                </li>
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Eller måske er du interesseret i noget helt andet, som tager
                    mange linjer at forklare
                  </FunctionalLink>
                </li>
              </ul>
            </div>
          </FooterColumn>
          <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
            <div className="align-text-left">
              <Heading level="h2" className="h5 mb-4">
                Links
              </Heading>
              <ul className=" mt-0 nobullet-list mb-0">
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Læs lidt om dit
                  </FunctionalLink>
                </li>

                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Her er også lidt om dat
                  </FunctionalLink>
                </li>
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Eller måske er du interesseret i noget helt andet, som tager
                    mange linjer at forklare
                  </FunctionalLink>
                </li>
              </ul>
            </div>
          </FooterColumn>
          <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
            <div className="align-text-left">
              <Heading level="h2" className="h5 mb-4">
                Links
              </Heading>
              <ul className=" mt-0 nobullet-list mb-0">
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Læs lidt om dit
                  </FunctionalLink>
                </li>

                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Her er også lidt om dat
                  </FunctionalLink>
                </li>
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Eller måske er du interesseret i noget helt andet, som tager
                    mange linjer at forklare
                  </FunctionalLink>
                </li>
              </ul>
            </div>
          </FooterColumn>
          <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
            <div className="align-text-left">
              <Heading level="h2" className="h5 mb-4">
                Links
              </Heading>
              <ul className=" mt-0 nobullet-list mb-0">
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Læs lidt om dit
                  </FunctionalLink>
                </li>

                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Her er også lidt om dat
                  </FunctionalLink>
                </li>
                <li>
                  <FunctionalLink as="a" href="#" className="function-link">
                    Eller måske er du interesseret i noget helt andet, som tager
                    mange linjer at forklare
                  </FunctionalLink>
                </li>
              </ul>
            </div>
          </FooterColumn>
        </FooterGrid>
        <ul className="mt-4 align-text-left unstyled-list inline-list">
          <li>
            <strong className="weight-semibold">
              Digitaliseringsstyrelsen
            </strong>
          </li>
          <li>
            <FunctionalLink
              as="a"
              href="mailto:support@myndighed.dk"
              title="Skriv til Digitaliseringsstyrelsen"
            >
              support@myndighed.dk
            </FunctionalLink>
          </li>
          <li>
            <FunctionalLink
              as="a"
              href="tel:+4512345678"
              title="Ring til Digitaliseringsstyrelsen"
            >
              (+45) 12 34 56 78
            </FunctionalLink>
          </li>
          <li className="d-print-none">
            <FunctionalLink
              as="a"
              href="#"
              title="Tilgængelighedserklæring"
              className="icon-link"
            >
              Tilgængelighedserklæring
              <Icon icon="open-in-new" />
            </FunctionalLink>
          </li>
          <li className="d-print-none">
            <FunctionalLink as="a" href="#" className="function-link">
              Privatlivspolitik (cookies)
            </FunctionalLink>
          </li>
        </ul>
      </>
    ),
  },
};

export const IconFooter: Story = {
  args: {
    children: (
      <FooterGrid>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className=" align-text-left ">
            <Heading level="h2" className="h5 mb-4">
              Ansvarlig myndighed
            </Heading>
            <ul className=" unstyled-list">
              <li>
                <li>
                  <img
                    src="/img/logo-placeholder.png"
                    className="logo"
                    alt="Logostyrelsen"
                  />
                </li>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3}>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Kontakt
            </Heading>

            <ul className="mt-0 nobullet-list">
              <li>
                <FunctionalLink
                  as="a"
                  className="function-link"
                  href="mailto:support@myndighed.dk"
                >
                  support@myndighed.dk
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink
                  as="a"
                  className="function-link"
                  href="tel:004512345678"
                >
                  (+45) 12 34 56 78
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Links
            </Heading>
            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Læs lidt om dit
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Her er også lidt om dat
                </FunctionalLink>
              </li>
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Eller måske er du interesseret i noget helt andet, som tager
                  mange linjer at forklare
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
        <FooterColumn xs={12} sm={12} md={3} hideOnPrint>
          <div className="align-text-left">
            <Heading level="h2" className="h5 mb-4">
              Webtilgængelighed og cookies
            </Heading>
            <ul className=" mt-0 nobullet-list mb-0">
              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Tilgængelighedserklæring
                </FunctionalLink>
              </li>

              <li>
                <FunctionalLink as="a" href="#" className="function-link">
                  Privatlivspolitik (cookies)
                </FunctionalLink>
              </li>
            </ul>
          </div>
        </FooterColumn>
      </FooterGrid>
    ),
  },
};
