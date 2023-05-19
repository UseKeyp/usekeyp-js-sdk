import { MailData } from "../types/MailData";

/**
 * @remarks - hook gets called when a user requests funds from another user. Hook sends a request to the server to send an email to the user who is being requested funds from. Hook gets called in ReviewTransfer component after user confirms inputs.
 * @param data - takes in an object with properties set in UseNodeMailerProps:
 * @param data.amount - amount of funds being requested.
 * @param data.asset - asset of funds being requested.
 * @param data.username - username of user who is being requested funds from.
 * @returns hook with a fetch request to the server to send an email to the user who is being requested funds from.
 */
const UseNodemailer = async (data: MailData) => {
  return await fetch("/api/auth/request", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json, text/plain, */*",
    },
    body: JSON.stringify(data),
  }).then((res) => {
    if (res.ok) {
      console.log("response ok");
      return res.json();
    } else {
      throw new Error("Failed to send message");
    }
  });
};

export default UseNodemailer;
