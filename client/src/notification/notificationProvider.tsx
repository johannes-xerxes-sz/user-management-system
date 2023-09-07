import React from "react";
import { NotificationProvider } from "@refinedev/core";
import { toast } from "react-toastify";

export const notificationProvider: NotificationProvider = {
  open: ({ key, message, type, undoableTimeout, cancelMutation }) => {
    if (toast.isActive(key as React.ReactText)) {
      toast.update(key as React.ReactText, {
        render: message,
        type: "default",
      });

      return;
    }

    toast(message, {
      toastId: key,
      type: "default",
    });
  },

  close: (key: any) => toast.dismiss(key),
};