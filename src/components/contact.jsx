import { useState } from "react";
import emailjs from "emailjs-com";
import React from "react";


export const Contact = (props) => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Contatos e Endereço</h2>
                <a
                  href='https://api.whatsapp.com/send?phone=5571992917798&text='
                  className='btn btn-custom btn-lg page-scroll'
                >
                  Chamar no Whatsapp
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Endereço
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefone/Whatsapp
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-instagram"></i> Instagram
                </span>{" "}
                {props.data ? props.data.instagram : "loading"}
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.instagram.com/jotas.licores/?igsh=M2IxeHNlYmJpMmYy">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://api.whatsapp.com/send?phone=5571992917798&text=">
                      <i className="fa fa-whatsapp"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>
            &copy; 2024 Design by{" "}
            <a href="http://www.templatewire.com" rel="nofollow">
              PDTECH
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
