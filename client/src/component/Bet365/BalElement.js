import React from "react";


export const BalElement = ({balance}) => {

    function animateSvg() {
      const el = document.getElementById("el-animate-svg");

      el.classList.add("animated");

      setTimeout(() => {
        el.classList.remove("animated");
      }, 2000);
    }

  return (
      <div id="el-bal-custom" className=" aq-fixed aq-w-b315 315:aq-w-full smell:aq-w-b375 aq-overflow-hidden 315:aq-overflow-auto aq-bg-bet365-light-200 aq-z-100 aq-right-0 ">
      <div className="aq-h-b79 aq-w-full aq-px-b15 aq-pt-b20">
          <div className="aq-flex aq-justify-between">
              <div className="flex_cl_cent">
                  <div className="aq-text-b12 aq-text-bet365-dark-100">Esteban_Profesional</div>
                  <div className="aq-inline-flex aq-h-b40"><span
                          className="aq-text-b20 aq-text-bet365-dark-100 aq-font-bold aq-pr-b5">{balance}€</span><span
                          className="aq-h-b40 aq-pt-b6 aq-cursor-pointer "><svg onClick= { () => animateSvg() } id="el-animate-svg" className="" xmlns="http://www.w3.org/2000/svg"
                              width="18" height="18" viewBox="0 0 18 18">
                              <g fill="none" fill-rule="evenodd">
                                  <path d="M0 0h18v18H0z"></path>
                                  <path fill="#333" fill-rule="nonzero"
                                      d="M9 15a6 6 0 1 1 6-6h-1a5 5 0 1 0-5 5v1zm7.375-6.997L15.119 9.57c-.381.436-.84.446-1.222-.007L12.62 8 12 8.787l1.282 1.566c.73.872 1.719.85 2.449.012L17 8.785l-.625-.782z">
                                  </path>
                              </g>
                          </svg></span></div>
              </div>
              <div
                  className="aq-inline-flex hover:aq-bg-white aq-cursor-pointer aq-justify-center aq-items-center aq-leading-normal aq-h-b44 aq-w-b120 aq-border aq-border-bet365-light-500">
                  <svg className="aq-h-b14 aq-mr-b10 aq-mt-b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12 13">
                      <path fill="#404040"
                          d="M4.586 7.802L6 9.212l1.414-1.41-.003-.003 3.271-3.278-1.414-1.41L7 5.383V0H5l.002 5.385-2.27-2.274-1.414 1.41L4.588 7.8l-.002.003zM12 13v-1.995H0V13h12z">
                      </path>
                  </svg>
                  <div className="aq-font-bold aq-text-b14 aq-text-bet365-dark-100">Ingresar</div>
              </div>
          </div>
      </div>
      <div className="aq-flex aq-h-b58 aq-px-b15 aq-pb-b5 aq-border-b aq-border-b-bet365-border-light2">
          <div className="aq-h-b52 aq-w-b135.23">
              <div className="aq-text-b11">Saldo a retirar</div>
              <div className="aq-text-b15 aq-font-bold">0,00€</div>
          </div>
          <div className="aq-h-b52 aq-w-b122.73">
              <div className="aq-text-b11">Créditos de aquesta</div>
              <div className="aq-text-b15 aq-font-bold">0,00€</div>
          </div>
      </div>
      <div
          className="aq-flex aq-snap aq-relative aq-overflow-x-hidden aq-items-center aq-h-b51 aq-bg-bet365-light-100 aq-text-b13 aq-text-bet365-dark-300">
          <div
              className="aq-shrink-0 aq-h-full aq-flex aq-items-center aq-relative aq-mr-b25 aq-ml-b15 aq-font-bold aq-cursor-pointer">
              Cuenta<div className="aq-w-full aq-absolute aq-h-b2 aq-bg-bet365-green-50 aq-bottom-0"></div>
          </div>
          <div className="aq-h-full aq-flex aq-items-center aq-shrink-0 aq-mr-b25 aq-cursor-pointer">Alertas</div>
          <div className="aq-h-full aq-flex aq-items-center aq-shrink-0 aq-mr-b25 aq-cursor-pointer">Offertas</div>
          <div className="aq-h-full aq-flex aq-items-center aq-shrink-0 aq-mr-b25 aq-cursor-pointer">Preferencias</div>
      </div>
      <div className="aq-w-full aq-h-b2 aq-bg-bet365-border-light"></div>
      <div>
          <div>
              <div
                  className="aq-grid 333:aq-grid-cols-3 aq-grid-cols-2 aq-justify-items-stretch aq-text-bet365-dark-270 aq-h-full aq-w-full aq-pt-b20 aq-pb-b10 aq-pl-b5 aq-bg-bet365-light-100 aq-border-b aq-border-b-bet365-border-light2 aq-text-b11 aq-font-bold">
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg xmlns="http://www.w3.org/2000/svg"
                              width="34" height="31" viewBox="0 0 34 31">
                              <g fill="none" fill-rule="evenodd">
                                  <path
                                      d="M27.5.518V6.5H.5V4c.506-.53.9-.719 1.418-.904 1.145-.409 2.863-.774 5.153-1.101C11.639 1.342 18.449.851 27.5.518h0z"
                                      stroke="#9C9C9C" fill="#EEF0F0"></path>
                                  <path
                                      d="M.5 5.569c3.226.34 13.432.485 30.903.497h0l1.286.001h.811V30.5H3c-.69 0-1.315-.28-1.768-.732A2.492 2.492 0 01.5 28h0z"
                                      stroke="#9C9C9C" fill="#FDFFFF"></path>
                                  <path
                                      d="M33.471 16.25v6.314h-7.814a3.147 3.147 0 01-2.232-.924 3.147 3.147 0 01-.925-2.233c0-.872.353-1.661.925-2.232a3.147 3.147 0 012.232-.925h7.814z"
                                      stroke="#9C9C9C" fill="#FDFFFF"></path>
                                  <path d="M25.329 19h8.642v1H25.33a.5.5 0 010-1z" fill="#9C9C9C"></path>
                              </g>
                          </svg></div>
                      <div>Banca</div>
                  </div>
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-relative aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg
                              xmlns="http://www.w3.org/2000/svg" width="36" height="25" viewBox="0 0 36 25">
                              <defs>
                                  <path
                                      d="M3.007.001L33 .014a3.004 3.004 0 013 3V22a3 3 0 01-3 3H3.039a3 3 0 01-3-2.995L.005 3.007A3 3 0 013.007 0z">
                                  </path>
                              </defs>
                              <g fill="none" fill-rule="evenodd">
                                  <path stroke="#9C9C9C" fill="#FDFFFF"
                                      d="M3 .501l30 .013a2.501 2.501 0 012.5 2.501h0V22c0 .69-.28 1.315-.732 1.768A2.492 2.492 0 0133 24.5h0H3.039c-.69 0-1.314-.28-1.766-.73a2.492 2.492 0 01-.734-1.766h0L.505 3.006a2.492 2.492 0 01.73-1.77A2.492 2.492 0 013 .502h0z">
                                  </path>
                                  <path d="M0 2l15.882 15.186c1.06 1.085 3.177 1.085 4.236 0L36 2H0z" stroke="#EEF0F0"
                                      stroke-width="2" fill="#FDFFFF"></path>
                                  <path d="M0 2l18 17L36 2H0z" fill="#EEF0F0"></path>
                                  <path d="M0 1l15.882 15.186c1.06 1.085 3.177 1.085 4.236 0L36 1" stroke="#9C9C9C"
                                      fill="#FDFFFF"></path>
                              </g>
                          </svg>
                          <div
                              className="aq-absolute aq-top-b5 -aq-right-b7 aq-flex aq-items-center aq-justify-center aq-bg-bet365-green-50 aq-text-bet365-dark-250 aq-text-b10 aq-h-b17 aq-w-b17 aq-rounded-full ">
                              0</div>
                      </div>
                      <div>Mensajes</div>
                  </div>
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg width="38" height="36" viewBox="0 0 38 36"
                              xmlns="http://www.w3.org/2000/svg">
                              <g fill="none" fill-rule="evenodd">
                                  <path
                                      d="M16.5 13.5c4.43 0 8.444 1.481 11.348 3.885 2.867 2.372 4.652 5.647 4.652 9.27 0 1.503-.306 2.723-.883 3.708-.614 1.05-1.533 1.828-2.685 2.41C25.96 34.277 21.49 34.5 16.5 34.5c-4.99 0-9.46-.223-12.432-1.727-1.152-.582-2.07-1.36-2.685-2.41C.806 29.378.5 28.158.5 26.655c0-3.623 1.785-6.898 4.652-9.27C8.056 14.98 12.07 13.5 16.5 13.5z"
                                      stroke="#9C9C9C" fill="#FDFFFF"></path>
                                  <ellipse fill="#EEF0F0" cx="16.5" cy="10" rx="5.5" ry="7"></ellipse>
                                  <circle stroke="#9C9C9C" fill="#FDFFFF" cx="16.5" cy="7.5" r="7"></circle>
                                  <g>
                                      <g transform="translate(18 16)">
                                          <path
                                              d="M10.753-.555l.39 2.149c.599.165 1.168.4 1.7.696h0l1.196-1.196 3.032 2.358-1.244 1.796c.3.529.54 1.096.71 1.693h1.691l.477 3.812-2.149.39a7.714 7.714 0 01-.696 1.7h0l1.196 1.196-2.358 3.032-1.796-1.244c-.529.3-1.096.54-1.693.71h0v1.691l-3.812.477-.39-2.149a7.714 7.714 0 01-1.7-.696h0l-1.196 1.196-3.032-2.358 1.244-1.796a7.716 7.716 0 01-.71-1.693h0-1.691l-.477-3.812 2.149-.39c.165-.599.4-1.168.696-1.7h0L1.094 4.111 3.452 1.08l1.796 1.244c.529-.3 1.096-.54 1.693-.71h0V-.079l3.812-.477z"
                                              stroke="#979797" fill="#FDFFFF"></path>
                                          <circle stroke="#9C9C9C" fill="#EEF0F0" cx="9.075" cy="9.075" r="2.75">
                                          </circle>
                                      </g>
                                  </g>
                              </g>
                          </svg></div>
                      <div>Mi cuenta</div>
                  </div>
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg xmlns="http://www.w3.org/2000/svg"
                              width="33" height="38" viewBox="0 0 33 38">
                              <g stroke="#9C9C9C" fill="none">
                                  <path
                                      d="M16.5 1l-.161.092A106.33 106.33 0 018.78 5.007a94.713 94.713 0 01-7.554 3.159l-.198.072-.006.204C.636 23.17 5.078 32.511 16.286 36.825l.465.175.12-.053c10.815-4.72 15.784-14.137 15.06-28.09l-.035-.62-.19-.07A97.35 97.35 0 0124.168 5a106.83 106.83 0 01-6.666-3.433L16.5 1z"
                                      fill="#FDFFFF"></path>
                                  <path
                                      d="M16.234 14.324c1.489 0 2.696 1.233 2.696 2.753a2.754 2.754 0 01-1.684 2.552l1.957 5.59a.397.397 0 01-.234.504.38.38 0 01-.13.023h-5.146a.39.39 0 01-.367-.518l1.814-5.635a2.756 2.756 0 01-1.601-2.516c0-1.52 1.207-2.753 2.695-2.753z"
                                      fill="#EEF0F0"></path>
                                  <g stroke-linecap="square">
                                      <path d="M16.75 5s3.016 1.721 5.027 2.734c1.34.674 3.175 1.515 5.503 2.522">
                                      </path>
                                      <path d="M5.75 10.256s3.684-1.675 5.394-2.522C12.854 6.887 16.25 5 16.25 5">
                                      </path>
                                  </g>
                              </g>
                          </svg></div>
                      <div className="aq-text-center"><div>Controles de</div><div>apuestas</div></div>
                  </div>
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg xmlns="http://www.w3.org/2000/svg"
                              width="37" height="26" viewBox="0 0 37 26">
                              <g fill="none" fill-rule="evenodd">
                                  <rect width="36" height="25" x=".5" y=".5" fill="#FDFFFF" stroke="#9C9C9C" rx="3">
                                  </rect>
                                  <path fill="#EEF0F0" d="M3 1h31.01a2 2 0 012 2v1.58H1V3a2 2 0 012-2z" opacity=".75">
                                  </path>
                                  <g fill="#9C9C9C">
                                      <path
                                          d="M8.003 17.733c0 .567-.448 1.027-1.001 1.027C6.448 18.76 6 18.3 6 17.733s.448-1.027 1.002-1.027c.553 0 1.001.46 1.001 1.027">
                                      </path>
                                      <path
                                          d="M13.726 11.866c0 .567-.448 1.026-1.001 1.026-.553 0-1.002-.46-1.002-1.026 0-.568.449-1.027 1.002-1.027.553 0 1.001.46 1.001 1.027">
                                      </path>
                                      <path
                                          d="M20.126 18.426c0 .567-.448 1.027-1.002 1.027-.553 0-1.001-.46-1.001-1.027s.448-1.027 1.001-1.027c.554 0 1.002.46 1.002 1.027">
                                      </path>
                                      <path
                                          d="M29.556 8.79c0 .568-.448 1.027-1.001 1.027-.553 0-1.002-.46-1.002-1.027s.449-1.026 1.002-1.026c.553 0 1.001.46 1.001 1.026">
                                      </path>
                                  </g>
                                  <path stroke="#9C9C9C" stroke-width=".5"
                                      d="M7.002 17.733l5.723-5.867 6.4 6.56 9.43-9.636"></path>
                              </g>
                          </svg></div>
                      <div>Mi actividad</div>
                  </div>
                  <div className="aq-flex aq-flex-col aq-items-center aq-mr-b5 aq-pb-b20 aq-cursor-pointer aq-h-b84">
                      <div className="aq-mb-b8 aq-h-b39 aq-flex aq-items-end"><svg xmlns="http://www.w3.org/2000/svg"
                              width="33" height="33" viewBox="0 0 32 32">
                              <g fill="none" fill-rule="evenodd">
                                  <rect width="33" height="33" fill="#FDFFFF" fill-rule="nonzero" rx="16"></rect>
                                  <circle cx="16" cy="16" r="14.5" stroke="#EEF0F0" stroke-width="3"></circle>
                                  <circle cx="16" cy="16" r="15.5" stroke="#9C9C9C"></circle>
                                  <g>
                                      <line x1="16" x2="16" y1="16.5" y2="7" stroke="#C3C3C3"></line>
                                  </g>
                                  <line x1="24.007" x2="16" y1="16.469" y2="16.469" stroke="#C3C3C3"></line>
                                  <g fill="#9C9C9C" fill-rule="nonzero" transform="translate(2 2)">
                                      <circle cx="14" cy="26.5" r="1"></circle>
                                      <circle cx="14" cy="1.5" r="1"></circle>
                                      <circle cx="1.5" cy="14.5" r="1"></circle>
                                      <circle cx="26.5" cy="14.5" r="1"></circle>
                                  </g>
                                  <circle cx="16" cy="16.5" r="1" fill="#9E9E9E" fill-rule="nonzero" stroke="#9E9E9E">
                                  </circle>
                              </g>
                          </svg></div>
                      <div>Historial</div>
                  </div>
              </div>
              <div
                  className="aq-flex aq-items-center aq-h-b50 aq-px-b15 aq-pt-b5 aq-bg-bet365-light-200 hover:aq-bg-white aq-cursor-pointer aq-text-bet365-dark-100 aq-text-b15">
                  <div className="aq-mr-b8 aq-h-b39 aq-flex aq-items-center"><svg xmlns="http://www.w3.org/2000/svg"
                          width="16" height="20" viewBox="0 0 16 20">
                          <path fill="#585858"
                              d="M8.28.095c2.437 1.135 1.427.432 3.876 1.553L16 3.426v7.115c0 1.358-.47 2.446-1.21 3.572-.812 1.24-1.958 2.352-3.113 3.263-.902.71-1.786 1.296-2.753 1.91-.622.475-1.223.424-1.879 0-1.22-.665-2.206-1.46-3.24-2.344-1.026-.877-2.034-1.92-2.791-3.092C.39 12.84-.008 11.75 0 10.555V3.426l3.968-1.778L7.737.095c.226-.127.318-.127.544 0zM8 1.485L1.478 4.45v6.091c-.031 1.029.346 1.929.92 2.774.612.873 1.32 1.66 2.087 2.343a19.888 19.888 0 0 0 3.252 2.323c.239.169.305.169.544 0 .63-.42 2.626-1.875 3.228-2.323.942-.928 1.153-1.112 2.123-2.343a4.713 4.713 0 0 0 .794-2.676V4.45L8 1.485zm3.51 5.877a.87.87 0 0 1 0 1.023l-.164.168-4.188 4.201a3.14 3.14 0 0 1-.314.238l-1.56-1.526a8.727 8.727 0 0 1-.671-.756.585.585 0 0 1 0-.729.649.649 0 0 1 .752-.252c.186.08.354.2.493.35.315.224.561.546.958.897.548-.533 1.068-1.009 1.56-1.499.493-.49 1.178-1.149 1.766-1.779.12-.12.248-.233.383-.336a.753.753 0 0 1 .986 0z">
                          </path>
                      </svg></div>Juego más seguro
              </div>
              <div
                  className="aq-flex aq-items-center aq-h-b50 aq-px-b15 aq-pb-b5 aq-bg-bg-bet365-light-200 aq-border-b aq-border-b-bet365-border-light2 hover:aq-bg-white aq-cursor-pointer aq-text-bet365-dark-100 aq-text-b15">
                  Ayuda</div>
              <div
                  className="aq-flex aq-items-center aq-h-b50 aq-px-b15 aq-py-b5 aq-bg-bg-bet365-light-200 hover:aq-bg-white aq-cursor-pointer aq-text-bet365-dark-100 aq-text-b15">
                  Salir</div>
          </div>
      </div>
  </div>
  )
}