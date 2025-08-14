import type { Meta, StoryObj } from "@storybook/react";
import {
  Toast,
  ToastContainer,
  ToastProps,
} from "../../components/Toast/Toast";
import { Button } from "../../components/Button/Button";
import { useState } from "react";

let incr = 0;

const meta = {
  title: "DKFDS/Toast",
  component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SuccessToast: Story = {
  args: {
    heading: "Toastbesked med succesbesked",
    type: "success",
    children: "Her står der noget uddybende information",
  },
  render: (args) => {
    const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);
    return (
      <>
        <Button
          buttonType="primary"
          onClick={() => {
            const id = incr++;
            setToasts([
              ...toasts,
              {
                id: "toast-" + id,
                ...args,
                onClose: () => {
                  setToasts((prevToasts) =>
                    prevToasts.filter((t) => t.id !== "toast-" + id),
                  );
                },
              },
            ]);
          }}
        >
          Vis en toastbesked
        </Button>
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              heading={toast.heading}
              onClose={toast.onClose}
            >
              {toast.children}
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};

export const WarningToast: Story = {
  args: {
    heading: "Dette er en advarsel",
    type: "warning",
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  render: (args) => {
    const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);
    return (
      <>
        <Button
          buttonType="primary"
          onClick={() => {
            const id = incr++;
            setToasts([
              ...toasts,
              {
                id: "toast-" + id,
                ...args,
                onClose: () => {
                  setToasts((prevToasts) =>
                    prevToasts.filter((t) => t.id !== "toast-" + id),
                  );
                },
              },
            ]);
          }}
        >
          Vis en toastbesked
        </Button>
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              heading={toast.heading}
              onClose={toast.onClose}
            >
              {toast.children}
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};

export const ErrorToast: Story = {
  args: {
    heading: "Der opstod en fejl",
    type: "error",
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  render: (args) => {
    const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);
    return (
      <>
        <Button
          buttonType="primary"
          onClick={() => {
            const id = incr++;
            setToasts([
              ...toasts,
              {
                id: "toast-" + id,
                ...args,
                onClose: () => {
                  setToasts((prevToasts) =>
                    prevToasts.filter((t) => t.id !== "toast-" + id),
                  );
                },
              },
            ]);
          }}
        >
          Vis en toastbesked
        </Button>
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              heading={toast.heading}
              onClose={toast.onClose}
            >
              {toast.children}
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};

export const InformationToast: Story = {
  args: {
    heading: "Du har fået en besked",
    type: "info",
    children:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
  },
  render: (args) => {
    const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);
    return (
      <>
        <Button
          buttonType="primary"
          onClick={() => {
            const id = incr++;
            setToasts([
              ...toasts,
              {
                id: "toast-" + id,
                ...args,
                onClose: () => {
                  setToasts((prevToasts) =>
                    prevToasts.filter((t) => t.id !== "toast-" + id),
                  );
                },
              },
            ]);
          }}
        >
          Vis en toastbesked
        </Button>
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              heading={toast.heading}
              onClose={toast.onClose}
            >
              {toast.children}
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};

export const NoTextToast: Story = {
  args: {
    heading: "Dine ændringer er blevet gemt",
    type: "info",
  },
  render: (args) => {
    const [toasts, setToasts] = useState<(ToastProps & { id: string })[]>([]);
    return (
      <>
        <Button
          buttonType="primary"
          onClick={() => {
            const id = incr++;
            setToasts([
              ...toasts,
              {
                id: "toast-" + id,
                ...args,
                onClose: () => {
                  setToasts((prevToasts) =>
                    prevToasts.filter((t) => t.id !== "toast-" + id),
                  );
                },
              },
            ]);
          }}
        >
          Vis en toastbesked
        </Button>
        <ToastContainer>
          {toasts.map((toast) => (
            <Toast
              key={toast.id}
              type={toast.type}
              heading={toast.heading}
              onClose={toast.onClose}
            >
              {toast.children}
            </Toast>
          ))}
        </ToastContainer>
      </>
    );
  },
};
