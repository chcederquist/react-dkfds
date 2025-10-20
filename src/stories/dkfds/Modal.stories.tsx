import type { Meta, StoryObj } from "@storybook/react";
import { Modal } from "../../components/Modal/Modal";
import { Button } from "../../components/Button/Button";
import { useState } from "react";

const meta = {
  title: "DKFDS/Modal",
  component: Modal,
  subcomponents: { Button },
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessModal: Story = {
  args: {
    header: {
      level: "h2",
      children: "Lorem ipsum",
    },
    id: "Examplemodal",
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        sodales turpis nec tincidunt dictum. Aliquam hendrerit nunc nec arcu
        lobortis fringilla. Sed nulla lectus, mollis eget rhoncus sed, porta eu
        ipsum. Cras eleifend elementum finibus. Mauris ac magna quis orci
        dapibus suscipit. Vestibulum accumsan turpis diam, ut pretium quam
        sollicitudin sed. Pellentesque posuere eget tortor quis imperdiet.
        Pellentesque gravida, enim vel porttitor sagittis, libero neque
        efficitur justo, nec gravida orci risus consequat lacus.
      </>
    ),
    footer: (
      <>
        <Button buttonType="primary">Primær knap</Button>
        <Button buttonType="secondary">Sekundær knap</Button>
      </>
    ),
    show: false,
  },
  render: (args) => {
    const [show, setShow] = useState(args.show);
    return (
      <div className="modal-container">
        <Modal {...args} show={show} onClose={() => setShow(false)} />
        <Button
          buttonType="primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Åbn modal
        </Button>
      </div>
    );
  },
};

export const ForcedActionModal: Story = {
  args: {
    header: {
      level: "h2",
      children: "Lorem ipsum",
    },
    id: "Examplemodal2",
    hasCloseButton: false,
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        sodales turpis nec tincidunt dictum. Aliquam hendrerit nunc nec arcu
        lobortis fringilla. Sed nulla lectus, mollis eget rhoncus sed, porta eu
        ipsum. Cras eleifend elementum finibus. Mauris ac magna quis orci
        dapibus suscipit. Vestibulum accumsan turpis diam, ut pretium quam
        sollicitudin sed. Pellentesque posuere eget tortor quis imperdiet.
        Pellentesque gravida, enim vel porttitor sagittis, libero neque
        efficitur justo, nec gravida orci risus consequat lacus.
      </>
    ),
    footer: (
      <>
        <Button buttonType="primary">Primær knap</Button>
        <Button buttonType="secondary">Sekundær knap</Button>
      </>
    ),
    show: false,
  },
  render: (args) => {
    const [show, setShow] = useState(args.show);
    return (
      <div className="modal-container">
        <Modal
          {...args}
          show={show}
          onClose={() => setShow(false)}
          footer={
            <>
              <Button buttonType="primary" onClick={() => setShow(false)}>
                Primær knap
              </Button>
              <Button buttonType="secondary" onClick={() => setShow(false)}>
                Sekundær knap
              </Button>
            </>
          }
        />
        <Button
          buttonType="primary"
          onClick={() => {
            setShow(true);
          }}
        >
          Åbn modal
        </Button>
      </div>
    );
  },
};

export const DoubleModal: Story = {
  args: {
    header: {
      level: "h2",
      children: "Lorem ipsum",
    },
    id: "Examplemodal",
    children: (
      <>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
        sodales turpis nec tincidunt dictum. Aliquam hendrerit nunc nec arcu
        lobortis fringilla. Sed nulla lectus, mollis eget rhoncus sed, porta eu
        ipsum. Cras eleifend elementum finibus. Mauris ac magna quis orci
        dapibus suscipit. Vestibulum accumsan turpis diam, ut pretium quam
        sollicitudin sed. Pellentesque posuere eget tortor quis imperdiet.
        Pellentesque gravida, enim vel porttitor sagittis, libero neque
        efficitur justo, nec gravida orci risus consequat lacus.
      </>
    ),
    footer: (
      <>
        <Button buttonType="primary">Primær knap</Button>
        <Button buttonType="secondary">Sekundær knap</Button>
      </>
    ),
    show: false,
  },
  render: (args) => {
    const [show, setShow] = useState(args.show);
    const [showSecondModal, setShowSecondModal] = useState(false);
    return (
      <div className="modal-container">
        <Modal {...args} show={show} onClose={() => setShow(false)} />
        <Button
          buttonType="primary"
          onClick={() => {
            setShow(true);
            setTimeout(() => {
              setShowSecondModal(true);
            }, 5000);
          }}
        >
          Åbn modal
        </Button>
        <Modal
          id="Examplemodal2"
          header={{
            level: "h2",
            children: "Anden modal",
          }}
          show={showSecondModal}
          onClose={() => setShowSecondModal(false)}
          footer={
            <>
              <Button
                buttonType="primary"
                onClick={() => setShowSecondModal(false)}
              >
                Luk anden modal
              </Button>
            </>
          }
        >
          Anden modal indhold. Denne modal lukker automatisk den første.
        </Modal>
      </div>
    );
  },
};
