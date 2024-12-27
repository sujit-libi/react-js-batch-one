export default function Modal({ children, element }) {
  return element;
}

function SuccessMsg() {
  return <div>Success Message</div>;
}

function ErrorMsg() {
  return <div>Error Message</div>;
}

function WarningMsg() {
  return <div>WAring Message</div>;
}

{
  /* <Modal element={<WarningMsg />}>


<Modal>
  <SuccessMsg />
</ Modal>

<Modal>
  <ErrorMsg />
</ Modal> */
}
