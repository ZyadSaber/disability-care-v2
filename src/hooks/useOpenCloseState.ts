import { useState, useCallback } from "react";

const useOpenCloseState = () => {
  const [visible, setVisible] = useState(false);

  const handleOpen = useCallback(() => setVisible(true), []);

  const handleClose = useCallback(() => setVisible(false), []);

  return {
    visible,
    handleOpen,
    handleClose,
  };
};

export default useOpenCloseState;
