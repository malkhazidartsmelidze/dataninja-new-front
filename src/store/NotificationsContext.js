import React, { createContext, useContext, Fragment, useState } from 'react';
import { Snackbar, Fade } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';

export const NotificationsContext = createContext({});

export const NotificationsContextProvider = ({ children }) => {
  const [messages, setMessages] = useState({});

  const notify = (msg, options) => {
    const id = new Date().getTime();
    const message = {
      message: msg,
      id,
      ...(options || {}),
    };
    setMessages({ ...messages, [id]: message });
  };

  const deleteMessage = (messageId) => {
    setMessages((old) => {
      delete old[messageId];
      return { ...old };
    });
  };

  return (
    <NotificationsContext.Provider
      value={{
        messages: messages,
        deleteMessage,
        notify,
      }}
    >
      {children}
    </NotificationsContext.Provider>
  );
};

export default function useNotif() {
  return useContext(NotificationsContext);
}

export const RenderedNotifications = (props) => {
  const { messages, deleteMessage } = useNotif();

  const handleCloseMessage = (id) => {
    deleteMessage(id);
  };

  return (
    <Fragment>
      {Object.values(messages).map((msg) => (
        <Snackbar
          anchorOrigin={{
            vertical: msg.vertical || 'bottom',
            horizontal: msg.horizontal || 'right',
          }}
          open={true}
          autoHideDuration={msg.forever ? undefined : msg.hideIn || 5000}
          onClose={() => handleCloseMessage(msg.id)}
          transitionComponent={Fade}
          key={msg.id}
        >
          <Alert
            elevation={6}
            variant='filled'
            onClose={() => handleCloseMessage(msg.id)}
            severity={msg.status || 'success'}
          >
            {msg.message}
          </Alert>
        </Snackbar>
      ))}
    </Fragment>
  );
};
