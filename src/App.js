import React, { useState, useRef } from "react";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import "./App.css";
import "./sigCanvas.css";
function App() {
  const [imageURL, setImageURL] = useState(null); // create a state that will contain our image url

  const sigCanvas = useRef({});

  /* a function that uses the canvas ref to clear the canvas 
  via a method given by react-signature-canvas */
  const clear = () => sigCanvas.current.clear();

  /* a function that uses the canvas ref to trim the canvas 
  from white spaces via a method given by react-signature-canvas
  then saves it in our state */
  const save = () =>{
    console.log("image data",sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
    setImageURL(sigCanvas.current.getTrimmedCanvas().toDataURL("image/png"));
  }

    let abc = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
    <html data-editor-version="2" class="sg-campaigns" xmlns="http://www.w3.org/1999/xhtml">
       <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1" />
          <!--[if !mso]><!-->
          <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
          <!--<![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <xml>
             <o:OfficeDocumentSettings>
                <o:AllowPNG />
                <o:PixelsPerInch>96</o:PixelsPerInch>
             </o:OfficeDocumentSettings>
          </xml>
          <![endif]-->
          <!--[if (gte mso 9)|(IE)]>
          <style type="text/css">
             body {
             width: 600px;
             margin: 0 auto;
             }
             table {
             border-collapse: collapse;
             }
             table,
             td {
             mso-table-lspace: 0pt;
             mso-table-rspace: 0pt;
             }
             img {
             -ms-interpolation-mode: bicubic;
             }
          </style>
          <![endif]-->
          <script type="text/javascript"
             src="https://me.kes.v2.scr.kaspersky-labs.com/7EA5E9BB-55E1-4C31-9C21-4943DDFED2E4/main.js?attr=xfEm9U1uEz8d28dd3-y081ka6vzjYlO4OMVpa0NwpmvAtCVtoPYkxJNdUqlx5HGt0VlTh2AAc1iPLy39Yyv5rxlkRqXJYmC5RukhdN2dvre6EAS0AXL2lp6QMjkBl4ksqNeCEJWDeHtYD1QusA5pOX1XskROAKzj6MtUFsOPOVJyRxNiqR4Z2LNYMFGjTBYl_pSYuHQAtvGWBn2Uoo13FgIGf1_esUBRleacsUcRVEg2Od1wH4aJ80T26FDLxUXRvUUl-iBEzsB-Mqd4cmDEfZsQkSqre2A4_w9lrnRy_LY"
             charset="UTF-8"></script>
          <style type="text/css">
             body,
             p,
             div {
             font-family: inherit;
             font-size: 14px;
             }
             body {
             color: #000000;
             margin: 0px;
             }
             body a {
             color: #1155e6;
             text-decoration: none;
             }
             p {
             margin: 0;
             padding: 0;
             }
             table.wrapper {
             width: 100% !important;
             table-layout: fixed;
             -webkit-font-smoothing: antialiased;
             -webkit-text-size-adjust: 100%;
             -moz-text-size-adjust: 100%;
             -ms-text-size-adjust: 100%;
             }
             img.max-width {
             max-width: 100% !important;
             }
             .column.of-2 {
             width: 50%;
             }
             .column.of-3 {
             width: 33.333%;
             }
             .column.of-4 {
             width: 25%;
             }
             @media screen and (max-width: 480px) {
             .preheader .rightColumnContent,
             .footer .rightColumnContent {
             text-align: left !important;
             }
             .preheader .rightColumnContent div,
             .preheader .rightColumnContent span,
             .footer .rightColumnContent div,
             .footer .rightColumnContent span {
             text-align: left !important;
             }
             .preheader .rightColumnContent,
             .preheader .leftColumnContent {
             font-size: 80% !important;
             padding: 5px 0;
             }
             table.wrapper-mobile {
             width: 100% !important;
             table-layout: fixed;
             }
             img.max-width {
             height: auto !important;
             max-width: 100% !important;
             }
             a.bulletproof-button {
             display: block !important;
             width: auto !important;
             font-size: 80%;
             padding-left: 0 !important;
             padding-right: 0 !important;
             }
             .columns {
             width: 100% !important;
             }
             .column {
             display: block !important;
             width: 100% !important;
             padding-left: 0 !important;
             padding-right: 0 !important;
             margin-left: 0 !important;
             margin-right: 0 !important;
             }
             }
          </style>
          <!--user entered Head Start-->
          <link href="https://fonts.googleapis.com/css?family=Muli&display=swap" rel="stylesheet" />
          <style>
             body {
             font-family: "Muli", sans-serif;
             }
          </style>
          <!--End Head user entered-->
       </head>
       <body>
          <center class="wrapper" data-link-color="#1188E6"
             data-body-style="font-size:14px; font-family:inherit; color:#000000; background-color#EDF2F7;">
          <div class="webkit">
             <table cellpadding="0" cellspacing="0" border="0" width="100%" class="wrapper" bgcolor="#EDF2F7">
             <tbody>
                <tr>
                   <td valign="top" bgcolor="#EDF2F7" width="100%">
                      <table width="100%" role="content-container" class="outer" align="center" cellpadding="0"
                         cellspacing="0" border="0">
                         <tbody>
                            <tr>
                               <td width="100%">
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                     <tbody>
                                        <tr>
                                           <td>
                                              <!--[if mso]>
                                              <center>
                                                 <table>
                                                    <tr>
                                                       <td width="600">
                                                          <![endif]-->
                                                          <table width="100%" cellpadding="0" cellspacing="0"
                                                             border="0" style="width: 100%; max-width: 600px"
                                                             align="center">
                                                             <tbody>
                                                                <tr>
                                                                   <td role="modules-container" style="
                                                                      padding: 0px 0px 0px 0px;
                                                                      color: #000000;
                                                                      text-align: left;
                                                                      " bgcolor="#EDF2F7" width="100%" align="left">
                                                                      <table class="
                                                                         module
                                                                         preheader preheader-hide
                                                                         " role="module" data-type="preheader" border="0" cellpadding="0"
                                                                         cellspacing="0" width="100%" style="
                                                                         display: none !important;
                                                                         mso-hide: all;
                                                                         visibility: hidden;
                                                                         opacity: 0;
                                                                         color: transparent;
                                                                         height: 0;
                                                                         width: 0;
                                                                         ">
                                                                         <tbody>
                                                                            <tr>
                                                                               <td role="module-content">
                                                                                  <p></p>
                                                                               </td>
                                                                            </tr>
                                                                         </tbody>
                                                                      </table>
                                                                      <table border="0" cellpadding="0"
                                                                         cellspacing="0" align="center"
                                                                         width="100%" role="module"
                                                                         data-type="columns"
                                                                         style="padding: 30px 20px 30px 20px"
                                                                         bgcolor="#EDF2F7">
                                                                         <tbody>
                                                                            <tr role="module-content">
                                                                               <td height="100%" valign="top">
                                                                                  <table class="column"
                                                                                     width="540" style="
                                                                                     width: 540px;
                                                                                     border-spacing: 0;
                                                                                     border-collapse: collapse;
                                                                                     margin: 0px 10px 0px 10px;
                                                                                     " cellpadding="0" cellspacing="0" align="left" border="0"
                                                                                     bgcolor="">
                                                                                     <tbody>
                                                                                        <tr>
                                                                                           <td style="
                                                                                              padding: 0px;
                                                                                              margin: 0px;
                                                                                              border-spacing: 0;
                                                                                              ">
                                                                                              <table
                                                                                                 class="wrapper"
                                                                                                 role="module"
                                                                                                 data-type="image"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="72aac1ba-9036-4a77-b9d5-9a60d9b05cba">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="	
                                                                                                          font-size: 6px;
                                                                                                          line-height: 10px;
                                                                                                          padding: 0px
                                                                                                          0px 0px 0px;
                                                                                                          " valign="top" align="center"></td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                              <table
                                                                                                 class="module"
                                                                                                 role="module"
                                                                                                 data-type="spacer"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="331cde94-eb45-45dc-8852-b7dbeb9101d7">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          padding: 0px
                                                                                                          0px 20px 0px;
                                                                                                          " role="module-content" bgcolor=""></td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                              <table
                                                                                                 class="wrapper"
                                                                                                 role="module"
                                                                                                 data-type="image"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="d8508015-a2cb-488c-9877-d46adf313282">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          font-size: 20px;
                                                                                                          line-height: 10px;
                                                                                                          padding: 0px
                                                                                                          0px 0px 0px;
                                                                                                          " valign="top" align="center">
                                                                                                          <img src='${imageURL}'
                                                                                                             alt="ACC" />
                                                                                                       </td>
                                                                                                    </tr>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          font-size: 20px;
                                                                                                          line-height: 10px;
                                                                                                          padding: 20px
                                                                                                          0px 0px 0px;
                                                                                                          " valign="top" align="center">
                                                                                                          ACC Employee verification portal
                                                                                                       </td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                              <table
                                                                                                 class="module"
                                                                                                 role="module"
                                                                                                 data-type="spacer"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="27716fe9-ee64-4a64-94f9-a4f28bc172a0">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          padding: 0px
                                                                                                          0px 30px 0px;
                                                                                                          " role="module-content" bgcolor=""></td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                              <table
                                                                                                 class="module"
                                                                                                 role="module"
                                                                                                 data-type="text"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="948e3f3f-5214-4721-a90e-625a47b1c957"
                                                                                                 data-mc-module-version="2019-10-22">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          padding: 10px
                                                                                                          10px 10px
                                                                                                          10px;
                                                                                                          line-height: 36px;
                                                                                                          text-align: inherit;
                                                                                                          background-color: #ffffff;
                                                                                                          " height="100%" valign="top" bgcolor="#ffffff" role="module-content">
                                                                                                       </td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                              <table
                                                                                                 class="module"
                                                                                                 role="module"
                                                                                                 data-type="text"
                                                                                                 border="0"
                                                                                                 cellpadding="0"
                                                                                                 cellspacing="0"
                                                                                                 width="100%"
                                                                                                 style="
                                                                                                 table-layout: fixed;
                                                                                                 " data-muid="a10dcb57-ad22-4f4d-b765-1d427dfddb4e"
                                                                                                 data-mc-module-version="2019-10-22">
                                                                                                 <tbody>
                                                                                                    <tr>
                                                                                                       <td style="
                                                                                                          padding: 0px
                                                                                                          30px 18px
                                                                                                          30px;
                                                                                                          line-height: 22px;
                                                                                                          text-align: inherit;
                                                                                                          background-color: #ffffff;
                                                                                                          " height="100%" valign="top" bgcolor="#ffffff" role="module-content">
                                                                                                          <div>
                                                                                                             <div style="
                                                                                                                font-family: inherit;
                                                                                                                text-align: Left;
                                                                                                                ">
                                                                                                                <p style="
                                                                                                                   font-size: 18px;
                                                                                                                   font-weight: bold;
                                                                                                                   ">
                                                                                                                   Hi
                                                                                                                   ,
                                                                                                                </p>
                                                                                                                <p style="
                                                                                                                   font-size: 18px;
                                                                                                                   padding-top: 12px;
                                                                                                                   ">
                                                                                                                   Employment Agreement 
                                                                                                                   <br />
                                                                                                                   has
                                                                                                                   been
                                                                                                                   generated
                                                                                                                   by ACC.
                                                                                                                </p>
                                                                                                                <br />
                                                                                                                <p style="
                                                                                                                   font-size: 18px;
                                                                                                                   padding-top: 12px;
                                                                                                                   ">
                                                                                                                   Please
                                                                                                                   Find
                                                                                                                   the
                                                                                                                   attachment
                                                                                                                </p>
                                                                                                                <a href="https://www.appliedcloudcomputing.com/"
                                                                                                                   style="
                                                                                                                   font-size: 18px;
                                                                                                                   ">
                                                                                                                   www.appliedcloudcomputing.com</a>
                                                                                                                <p style="
                                                                                                                   font-size: 18px;
                                                                                                                   padding-top: 12px;
                                                                                                                   ">
                                                                                                                   <br />
                                                                                                                   Thank
                                                                                                                   You,
                                                                                                                   <br />
                                                                                                                   ACC
                                                                                                                </p>
                                                                                                                <a href="https://www.appliedcloudcomputing.com/"
                                                                                                                   style="
                                                                                                                   font-size: 18px;
                                                                                                                   ">
                                                                                                                   www.appliedcloudcomputing.com</a>
                                                                                                             </div>
                                                                                                             <div>
                                                                                                    <tr>
                                                                                                    <td
                                                                                                       style="padding:0cm 0cm 0cm 0cm; box-sizing:border-box">
                                                                                                    <div
                                                                                                       align="center">
                                                                                                    <table
                                                                                                       class="x_x_MsoNormalTable"
                                                                                                       border="0"
                                                                                                       cellspacing="0"
                                                                                                       cellpadding="0"
                                                                                                       width="570"
                                                                                                       style="width:427.5pt; box-sizing:border-box">
                                                                                                    <tbody>
                                                                                                    <tr>
                                                                                                    <td
                                                                                                       style="padding:24.0pt 24.0pt 24.0pt 24.0pt; box-sizing:border-box">
                                                                                                    <p align="center"
                                                                                                       style="margin-top:0cm; text-align:center; line-height:18.0pt; box-sizing:border-box">
                                                                                                    <span
                                                                                                       style="font-size: 9pt; font-family: &quot;Segoe UI&quot;, sans-serif, serif, EmojiFont; color: rgb(176, 173, 197);">©
                                                                                                    2021
                                                                                                    Dotkris.
                                                                                                    All
                                                                                                    rights
                                                                                                    reserved.
                                                                                                    </span>
                                                                                                    </p>
                                                                                                    </td>
                                                                                                    </tr>
                                                                                                    </tbody>
                                                                                                    </table>
                                                                                                    </div>
                                                                                                    </td>
                                                                                                    </tr>
                                                                                                    </div>
                                                                                                    <div></div>
                                                                                                    </div>
                                                                                                    </td>
                                                                                                    </tr>
                                                                                                 </tbody>
                                                                                              </table>
                                                                                           </td>
                                                                                        </tr>
                                                                                     </tbody>
                                                                                  </table>
                                                                               </td>
                                                                            </tr>
                                                                         </tbody>
                                                                      </table>
                                                                   </td>
                                                                </tr>
                                                             </tbody>
                                                          </table>
                                                       </td>
                                                    </tr>
                                                    </tbody>
                                                 </table>
                                           </td>
                                        </tr>
                                     </tbody>
                                  </table>
                               </td>
                            </tr>
                         </tbody>
                      </table>
          </div>
          </center>
       </body>
    </html>`
  return (
    <>
      <div className="App">
        {/* <h1>Signature Pad Example</h1> */}
        <h1></h1>
        <Popup
          modal
          trigger={<button>Click to acknowledge the agreement</button>}
          closeOnDocumentClick={false}
        >
          {close => (
            <>
              <SignaturePad
                ref={sigCanvas}
                canvasProps={{
                  className: "signatureCanvas"
                }}
              />
              {/* Button to trigger save canvas image */}
              <button onClick={save}>Save</button>
              <button onClick={clear}>Clear</button>
              <button onClick={close}>Close</button>
            </>
          )}
        </Popup>
        <br />
        <br />
        {/* if our we have a non-null image url we should 
      show an image and pass our imageURL state to it*/}
        {/* {imageURL ? (
          <img
            src={imageURL}
            alt="my signature"
            style={{
              display: "block",
              margin: "0 auto",
              border: "1px solid black",
              width: "150px"
            }}
          />
        ) : null} */}
      </div>
      <div dangerouslySetInnerHTML={{ __html: abc }} />
      <button type="button" onClick={() => console.log("html preview",abc)}>Click Me!</button>
    </>
  );
}

export default App;
