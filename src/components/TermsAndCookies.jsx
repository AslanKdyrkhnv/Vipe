import React, { useEffect } from "react";

const TermsAndCookies = () => {
  useEffect(() => {
    const modal = document.getElementById("my_modal_1");
    if (modal) {
      setTimeout(() => {
        modal.showModal();
      }, 3000);
    }
  }, []);

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <p className="py-4 text-2xl">Terms Conditions</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-primary">Appect</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default TermsAndCookies;
