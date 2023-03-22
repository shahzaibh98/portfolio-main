import React from "react";
import { AiFillCloseCircle, AiFillCheckCircle } from "react-icons/ai";

const Pro = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div onClick={onClose} className="services_modal">
      <div onClick={(x) => x.stopPropagation()} className="modal_content">
        <i onClick={onClose} className="modal_close">
          <AiFillCloseCircle />
        </i>

        <h3 className="modal_title">Web Developer</h3>
        <p className="modal_description">
          Providing quality work to clients and companies.
        </p>

        <ul className="modal_list">
          <li className="modal_item">
            <i className="modal_icon">
              <AiFillCheckCircle />
            </i>
            <p className="modal_info">
              As a web developer, quality planning and designing a user-centric,
              scalable, and accessible product is essential for meeting the
              needs of a given business.
            </p>
          </li>

          <li className="modal_item">
            <i className="modal_icon">
              <AiFillCheckCircle />
            </i>
            <p className="modal_info">
              Finding an appropriate way to solve a problem
            </p>
          </li>

          <li className="modal_item">
            <i className="modal_icon">
              <AiFillCheckCircle />
            </i>
            <p className="modal_info">
              Developing the most suitable product for the user and the company
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Pro;
