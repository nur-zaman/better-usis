"use client";

import { FC } from "react";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";

interface DemoNotificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DemoNotificationModal: FC<DemoNotificationModalProps> = ({
  isOpen,
  onClose,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Modal
      title="Demo Mode"
      description="This application is currently running in demo mode with mocked data. Some features might not behave as expected. Full functionality will be restored soon."
      isOpen={isOpen}
      onClose={onClose}
    >
      <div className="pt-6 space-x-2 flex items-center justify-end w-full">
        <Button onClick={onClose}>
          Got it!
        </Button>
      </div>
    </Modal>
  );
};
