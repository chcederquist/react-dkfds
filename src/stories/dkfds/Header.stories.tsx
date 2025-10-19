import type { Meta, StoryObj } from "@storybook/react";
import { Header } from "../../components/Header/Header";

const meta = {
  title: "DKFDS/Header",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const MainHeader: Story = {
  args: {
    mobileMenuHeading: "Menu",
    mobileMenuButtonLabel: "Menu",
    navigationMenu: {
      search: {
        inputProps: {
          id: "header-search",
          name: "header-search",
        },
        label: "Søg efter indhold",
        searchButtonProps: {
          label: "Søg",
        },
      },
      items: [
        {
          active: false,
          label: "Første menupunkt",
          url: "#",
          key: "first-menu-item",
          subItems: [
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "first-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "second-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "third-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "fourth-submenu",
            },
          ],
        },
        {
          active: false,
          label: "Andet menupunkt",
          url: "#",
          key: "second-menu-item",
        },
        {
          active: true,
          label: "Tredje menupunkt",
          url: "#",
          key: "third-menu-item",
          subItems: [
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "first-submenu",
            },
            {
              active: true,
              current: true,
              label: "Undermenu",
              url: "#",
              key: "second-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "third-submenu",
            },
          ],
        },
        {
          active: false,
          label: "Fjerde menupunkt",
          url: "#",
          key: "fourth-menu-item",
        },
        {
          active: false,
          label: "Femte menupunkt",
          key: "fifth-menu-item",
          url: "#",
          subItems: [
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "first-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "second-submenu",
            },
            {
              active: false,
              label: "Undermenu",
              url: "#",
              key: "third-submenu",
            },
          ],
        },
      ],
    },
    texts: {
      authorityContactInfo: "Kontakt myndighed",
      authorityName: "Myndighedsnavn",
      goToPortalsFrontpage: "Gå til portalens forside",
      logOffButton: "Log af",
      organisationName: "Organisationsnavn",
      portalName: "Portalnavn",
      solutionName: "Løsningstitel",
      userName: "Brugernavn",
    },
  },
};

export const SimpleHeader: Story = {
  args: {
    mobileMenuHeading: "Menu",
    mobileMenuButtonLabel: "Menu",
    texts: {
      authorityContactInfo: "Support 12 34 56 78",
      authorityName: "Myndighedsnavn",
      goToPortalsFrontpage: "Gå til Portalnavns forside",
      logOffButton: "Log af",
      solutionName: "Løsningstitel",
      userName: "Anders Andersen",
      portalName: "Portalnavn",
    },
  },
};

export const HeaderWithLanguageSwitch: Story = {
  args: {
    mobileMenuHeading: "Menu",
    mobileMenuButtonLabel: "Menu",

    texts: {
      authorityContactInfo: "Support 12 34 56 78",
      authorityName: "Myndighedsnavn",
      goToPortalsFrontpage: "Gå til Portalnavns forside",
      logOffButton: "Log af",
      solutionName: "Løsningstitel",
      userName: "Anders Andersen",
      portalName: "Portalnavn",
    },
    languagePickerProps: {
      languages: [
        {
          label: "Dansk",
          languageTag: "da",
          href: "?lang=da",
          current: true,
          ariaLabel: "Valgt sprog: Dansk",
        },
        {
          label: "English",
          languageTag: "en",
          href: "?lang=en",
        },
        {
          label: "Deutsch",
          languageTag: "de",
          href: "?lang=de",
        },
        {
          label: "Polski",
          languageTag: "pl",
          href: "?lang=pl",
        },
      ],
    },
  },
};
