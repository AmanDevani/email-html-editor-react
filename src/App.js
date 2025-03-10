import "./App.css";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Mark } from "@tiptap/core";
import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Node, mergeAttributes } from "@tiptap/core";
import TextStyle from "@tiptap/extension-text-style";
import { Button, Form, Input, Select, Switch } from "antd";
import { EDITORS, EDITORS_OPTIONS } from "./constants";

const styleContent = `<!DOCTYPE html
  PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:o="urn:schemas-microsoft-com:office:office"
  style="font-family:arial, 'helvetica neue', helvetica, sans-serif">

<head>
  <meta charset="UTF-8">
  <meta content="width=device-width, initial-scale=1" name="viewport">
  <meta name="x-apple-disable-message-reformatting">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta content="telephone=no" name="format-detection">
  <title>email verification</title><!--[if (mso 16)]>
    <style type="text/css">
    a {text-decoration: none;}
    </style>
    <![endif]--><!--[if gte mso 9]><style>sup { font-size: 100% !important; }</style><![endif]--><!--[if gte mso 9]>
<xml>
    <o:OfficeDocumentSettings>
    <o:AllowPNG></o:AllowPNG>
    <o:PixelsPerInch>96</o:PixelsPerInch>
    </o:OfficeDocumentSettings>
</xml>
<![endif]--><!--[if !mso]><!-- -->
  <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet"><!--<![endif]-->
  <style type="text/css">
    #outlook a {
      padding: 0;
    }

    .es-button {
      mso-style-priority: 100 !important;
      text-decoration: none !important;
    }

    a[x-apple-data-detectors] {
      color: inherit !important;
      text-decoration: none !important;
      font-size: inherit !important;
      font-family: inherit !important;
      font-weight: inherit !important;
      line-height: inherit !important;
    }

    .es-desk-hidden {
      display: none;
      float: left;
      overflow: hidden;
      width: 0;
      max-height: 0;
      line-height: 0;
      mso-hide: all;
    }

    @media only screen and (max-width:600px) {

      p,
      ul li,
      ol li,
      a {
        line-height: 150% !important
      }

      h1,
      h2,
      h3,
      h1 a,
      h2 a,
      h3 a {
        line-height: 120%
      }

      h1 {
        font-size: 30px !important;
        text-align: left
      }

      h2 {
        font-size: 24px !important;
        text-align: left
      }

      h3 {
        font-size: 20px !important;
        text-align: left
      }

      .es-header-body h1 a,
      .es-content-body h1 a,
      .es-footer-body h1 a {
        font-size: 30px !important;
        text-align: left
      }

      .es-header-body h2 a,
      .es-content-body h2 a,
      .es-footer-body h2 a {
        font-size: 24px !important;
        text-align: left
      }

      .es-header-body h3 a,
      .es-content-body h3 a,
      .es-footer-body h3 a {
        font-size: 20px !important;
        text-align: left
      }

      .es-menu td a {
        font-size: 14px !important
      }

      .es-header-body p,
      .es-header-body ul li,
      .es-header-body ol li,
      .es-header-body a {
        font-size: 14px !important
      }

      .es-content-body p,
      .es-content-body ul li,
      .es-content-body ol li,
      .es-content-body a {
        font-size: 14px !important
      }

      .es-footer-body p,
      .es-footer-body ul li,
      .es-footer-body ol li,
      .es-footer-body a {
        font-size: 14px !important
      }

      .es-infoblock p,
      .es-infoblock ul li,
      .es-infoblock ol li,
      .es-infoblock a {
        font-size: 12px !important
      }

      *[class="gmail-fix"] {
        display: none !important
      }

      .es-m-txt-c,
      .es-m-txt-c h1,
      .es-m-txt-c h2,
      .es-m-txt-c h3 {
        text-align: center !important
      }

      .es-m-txt-r,
      .es-m-txt-r h1,
      .es-m-txt-r h2,
      .es-m-txt-r h3 {
        text-align: right !important
      }

      .es-m-txt-l,
      .es-m-txt-l h1,
      .es-m-txt-l h2,
      .es-m-txt-l h3 {
        text-align: left !important
      }

      .es-m-txt-r img,
      .es-m-txt-c img,
      .es-m-txt-l img {
        display: inline !important
      }

      .es-button-border {
        display: inline-block !important
      }

      a.es-button,
      button.es-button {
        font-size: 18px !important;
        display: inline-block !important
      }

      .es-adaptive table,
      .es-left,
      .es-right {
        width: 100% !important
      }

      .es-content table,
      .es-header table,
      .es-footer table,
      .es-content,
      .es-footer,
      .es-header {
        width: 100% !important;
        max-width: 600px !important
      }

      .es-adapt-td {
        display: block !important;
        width: 100% !important
      }

      .adapt-img {
        width: 100% !important;
        height: auto !important
      }

      .es-m-p0 {
        padding: 0 !important
      }

      .es-m-p0r {
        padding-right: 0 !important
      }

      .es-m-p0l {
        padding-left: 0 !important
      }

      .es-m-p0t {
        padding-top: 0 !important
      }

      .es-m-p0b {
        padding-bottom: 0 !important
      }

      .es-m-p20b {
        padding-bottom: 20px !important
      }

      .es-mobile-hidden,
      .es-hidden {
        display: none !important
      }

      tr.es-desk-hidden,
      td.es-desk-hidden,
      table.es-desk-hidden {
        width: auto !important;
        overflow: visible !important;
        float: none !important;
        max-height: inherit !important;
        line-height: inherit !important
      }

      tr.es-desk-hidden {
        display: table-row !important
      }

      table.es-desk-hidden {
        display: table !important
      }

      td.es-desk-menu-hidden {
        display: table-cell !important
      }

      .es-menu td {
        width: 1% !important
      }

      table.es-table-not-adapt,
      .esd-block-html table {
        width: auto !important
      }

      table.es-social {
        display: inline-block !important
      }

      table.es-social td {
        display: inline-block !important
      }

      .es-desk-hidden {
        display: table-row !important;
        width: auto !important;
        overflow: visible !important;
        max-height: inherit !important
      }

      .es-m-p5 {
        padding: 5px !important
      }

      .es-m-p5t {
        padding-top: 5px !important
      }

      .es-m-p5b {
        padding-bottom: 5px !important
      }

      .es-m-p5r {
        padding-right: 5px !important
      }

      .es-m-p5l {
        padding-left: 5px !important
      }

      .es-m-p10 {
        padding: 10px !important
      }

      .es-m-p10t {
        padding-top: 10px !important
      }

      .es-m-p10b {
        padding-bottom: 10px !important
      }

      .es-m-p10r {
        padding-right: 10px !important
      }

      .es-m-p10l {
        padding-left: 10px !important
      }

      .es-m-p15 {
        padding: 15px !important
      }

      .es-m-p15t {
        padding-top: 15px !important
      }

      .es-m-p15b {
        padding-bottom: 15px !important
      }

      .es-m-p15r {
        padding-right: 15px !important
      }

      .es-m-p15l {
        padding-left: 15px !important
      }

      .es-m-p20 {
        padding: 20px !important
      }

      .es-m-p20t {
        padding-top: 20px !important
      }

      .es-m-p20r {
        padding-right: 20px !important
      }

      .es-m-p20l {
        padding-left: 20px !important
      }

      .es-m-p25 {
        padding: 25px !important
      }

      .es-m-p25t {
        padding-top: 25px !important
      }

      .es-m-p25b {
        padding-bottom: 25px !important
      }

      .es-m-p25r {
        padding-right: 25px !important
      }

      .es-m-p25l {
        padding-left: 25px !important
      }

      .es-m-p30 {
        padding: 30px !important
      }

      .es-m-p30t {
        padding-top: 30px !important
      }

      .es-m-p30b {
        padding-bottom: 30px !important
      }

      .es-m-p30r {
        padding-right: 30px !important
      }

      .es-m-p30l {
        padding-left: 30px !important
      }

      .es-m-p35 {
        padding: 35px !important
      }

      .es-m-p35t {
        padding-top: 35px !important
      }

      .es-m-p35b {
        padding-bottom: 35px !important
      }

      .es-m-p35r {
        padding-right: 35px !important
      }

      .es-m-p35l {
        padding-left: 35px !important
      }

      .es-m-p40 {
        padding: 40px !important
      }

      .es-m-p40t {
        padding-top: 40px !important
      }

      .es-m-p40b {
        padding-bottom: 40px !important
      }

      .es-m-p40r {
        padding-right: 40px !important
      }

      .es-m-p40l {
        padding-left: 40px !important
      }

      .h-auto {
        height: auto !important
      }
    }
  </style>
</head>

<body data-new-gr-c-s-loaded="14.1102.0"
  style="width:100%;font-family:arial, 'helvetica neue', helvetica, sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;padding:0;Margin:0">
  <div class="es-wrapper-color" style="background-color:{{#if lightBgColor}}{{lightBgColor}}{{else}}#f9f9f9{{/if}}><!--[if gte mso 9]>
      <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
        <v:fill type="tile" color={{#if lightBgColor}}{{lightBgColor}}{{else}}"#f9f9f9"{{/if}}></v:fill>
      </v:background>
    <![endif]-->
    <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
      style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:{{#if lightBgColor}}{{lightBgColor}}{{else}}#f9f9f9{{/if}}">
      <tr>
        <td valign="top" style="padding:0;Margin:0">
          <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
            style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:transparent;background-repeat:repeat;background-position:center top">
            <tr>
              <td align="center" style="padding:0;Margin:0">
                <table class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
                  style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px"
                  bgcolor={{#if lightBgColor}}{{lightBgColor}}{{else}}"#ffffff"{{/if}}>
                  <tr>
                    <td align="left"
                      style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;background-color:{{#if darkBgColor}}{{darkBgColor}}{{else}}#103362{{/if}}"
                      bgcolor={{#if darkBgColor}}{{darkBgColor}}{{else}}"#103362"{{/if}}>
                      <table cellpadding="0" cellspacing="0" width="100%"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0;font-size:0px"><img
                                    src="{{logoImage}}" alt
                                    style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic"
                                    width="100" height="100"></td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor={{#if lightBgColor}}{{lightBgColor}}{{else}}"#ffffff"{{/if}}
                      style="Margin:0;padding-top:25px;padding-bottom:25px;padding-left:30px;padding-right:30px;background-color:{{#if lightBgColor}}{{lightBgColor}}{{else}}#ffffff{{/if}}">
                      <table cellpadding="0" cellspacing="0" width="100%"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="left" style="padding:0;Margin:0;width:540px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="left" class="es-m-txt-c" style="padding:0;Margin:0;padding-bottom:15px">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#191919;font-size:16px">
                                    Click on <strong>Verify Email</strong> below to verify your email address.</p>
                                </td>
                              </tr>
                              <tr>
                                <td align="left" style="padding:0;Margin:0"><!--[if mso]><a href="{{url}}" target="_blank" hidden>
  <v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="" 
                style="height:39px; v-text-anchor:middle; width:125px" arcsize="21%" stroke="f"  fillcolor={{#if darkBgColor}}{{darkBgColor}}{{else}}"#103362"{{/if}}>
    <w:anchorlock></w:anchorlock>
    <center style='color:{{#if lightBgColor}}{{lightBgColor}}{{else}}#ffffff{{/if}}; font-family:arial, "helvetica neue", helvetica, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Verify Email</center>
  </v:roundrect></a>
<![endif]--><!--[if !mso]><!-- --><span class="msohide es-button-border"
                                    style="border-style:solid;border-color:#2cb543;background:{{#if darkBgColor}}{{darkBgColor}}{{else}}"#103362"{{/if}};border-width:0px;display:inline-block;border-radius:8px;width:auto;mso-border-alt:10px;mso-hide:all">
                                    <a href="{{url}}" class="es-button" target="_blank"
                                      style="mso-style-priority:100 !important;text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;color:{{#if lightBgColor}}{{lightBgColor}}{{else}}#ffffff{{/if}};font-size:16px;display:inline-block;background:{{#if darkBgColor}}{{darkBgColor}}{{else}}#103362{{/if}};border-radius:8px;font-family:arial, 'helvetica neue', helvetica, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;padding:10px 20px 10px 20px;border-color:{{#if darkBgColor}}{{darkBgColor}}{{else}}#103362{{/if}}">Verify
                                      Email</a></span><!--<![endif]--></td>
                              </tr>
                               <tr>
                              <td align="left" style="padding:0;Margin:0">
                                <p>
                                  If the verify email button is not working, please click on the link below to verify your email.<br><br>
                                  <a href="{{url}}" target="_blank">{{url}}</a>
                                </p>
                              </td>
                             </tr>
                              <tr>
                                <td align="left" class="es-m-txt-c"
                                  style="padding:0;Margin:0;padding-bottom:10px;padding-top:40px">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#191919;font-size:16px">
                                    Thank you,</p>
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:24px;color:#191919;font-size:16px">
                                    <b>Family Research Council</b>
                                  </p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td align="left" bgcolor={{#if darkBgColor}}{{darkBgColor}}{{else}}"#103362"{{/if}}
                      style="Margin:0;padding-top:15px;padding-bottom:15px;padding-left:20px;padding-right:20px;background-color:{{#if darkBgColor}}{{darkBgColor}}{{else}}#103362{{/if}}">
                      <table cellpadding="0" cellspacing="0" width="100%"
                        style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                        <tr>
                          <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
                            <table cellpadding="0" cellspacing="0" width="100%" role="presentation"
                              style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
                              <tr>
                                <td align="center" style="padding:0;Margin:0">
                                  <p
                                    style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;mso-line-height-rule:exactly;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:21px;color:#fbf7f1;font-size:14px">
                                    © {{copyrightYear}} FAMILY RESEARCH COUNCIL. All rights reserved.</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>`;

const inLineStyleContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
</head>
<body style="margin: 0; padding: 0; background-color: #f4f4f4;">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color: #f4f4f4; padding: 20px;">
        <tr>
            <td align="center">
                <table role="presentation" width="600" cellspacing="0" cellpadding="0" border="0" style="background-color: #ffffff; padding: 20px; border-radius: 8px; box-shadow: 0 0 10px rgba(0,0,0,0.1);">
                    <tr>
                        <td align="center" style="padding: 10px 0;">
                            <h1 style="color: #333333; font-family: Arial, sans-serif;">Welcome to Our Newsletter</h1>
                        </td>
                    </tr>
                    <tr>
                        <td style="padding: 20px; font-family: Arial, sans-serif; font-size: 16px; color: #555555;">
                            <p>Thank you for subscribing to our newsletter. We are excited to have you on board!</p>
                            <p>Stay tuned for the latest updates and exclusive offers.</p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px;">
                            <a href="#" style="background-color: #007bff; color: #ffffff; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; font-family: Arial, sans-serif;">Visit Our Website</a>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="padding: 20px; font-size: 12px; color: #888888; font-family: Arial, sans-serif;">
                            &copy; 2025 Your Company. All rights reserved.
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>
</html>
`;

const initialValues = {
  html: `<h1>Hello & Welcome</h1>`,
  editor: "TIPTAP",
  content: false,
};

function App() {
  const [form] = Form.useForm();
  const editorRef = useRef(null);
  const html = Form?.useWatch("html", form);
  const selectedEditor = Form?.useWatch("editor", form);
  const content = Form?.useWatch("content", form);

  const InlineStyles = Node.create({
    name: "inlineStyles",
    group: "inline",
    content: "text*",
    inline: true,
    parseHTML() {
      return [
        {
          tag: "span[style]",
          getAttrs: (node) => {
            return { style: node.getAttribute("style") };
          },
        },
      ];
    },
    renderHTML({ node, HTMLAttributes }) {
      return ["span", mergeAttributes(HTMLAttributes), 0];
    },
    addAttributes() {
      return {
        style: {
          default: null,
        },
      };
    },
  });

  const InlineStyle = Mark.create({
    name: "inlineStyle",

    addAttributes() {
      return {
        style: {
          default: null,
        },
      };
    },

    parseHTML() {
      return [
        {
          tag: "span[style]",
          getAttrs: (element) => ({
            style: element.getAttribute("style") || null,
          }),
        },
      ];
    },

    renderHTML({ HTMLAttributes }) {
      return ["span", HTMLAttributes, 0]; // Keeps inline styles inside <span>
    },

    addCommands() {
      return {
        setInlineStyle:
          (style) =>
          ({ commands }) => {
            return commands.setMark(this.name, { style });
          },
        unsetInlineStyle:
          () =>
          ({ commands }) => {
            return commands.unsetMark(this.name);
          },
      };
    },
  });
  const editor = useEditor({
    extensions: [
      StarterKit, // Ensures core functionality like bold, italic, etc.
      TextStyle,
      InlineStyles,
      InlineStyle,
    ],
    content: html, // Inject the HTML content here
  });

  const onClick = () => {
    console.log("in the quil submit :>> ", selectedEditor);
    if (selectedEditor === EDITORS.TIPTAP) {
      console.log("Submitted Text:", editor.getHTML());
    } else if (selectedEditor === EDITORS.TINYMCE && editorRef.current) {
      console.log("Submitted Text:", editorRef.current.getContent());
    } else if (selectedEditor === EDITORS.QUIL) {
      const plainText = document.querySelector(".ql-editor").innerHTML;
      console.log("Submitted Text:", plainText);
    }
  };

  const onChangeSwitch = (value) => {
    if (value) {
      form.setFieldValue("html", styleContent);
    } else {
      form.setFieldValue("html", inLineStyleContent);
    }
  };

  return (
    <div className="app">
      <Form form={form} name="form" initialValues={initialValues}>
        <Form.Item name="editor" label="Select Editor">
          <Select
            options={EDITORS_OPTIONS}
            placeholder="Select editor"
          ></Select>
        </Form.Item>
        <Form.Item
          name="content"
          label={`${
            content
              ? "Use Default Inline Styled Content"
              : "Use Default Styled Content"
          }`}
        >
          <Switch onChange={onChangeSwitch} />
        </Form.Item>
        <div className="text-editors-wrapper">
          <Form.Item name="html" className="html">
            <Input.TextArea rows={10} placeholder="Enter your html..." />
          </Form.Item>
          <div className="text-editors">
            {selectedEditor === EDITORS.TIPTAP && (
              <EditorContent editor={editor} />
            )}
            {selectedEditor === EDITORS.QUIL && <ReactQuill value={html} />}
            {selectedEditor === EDITORS.TINYMCE && (
              <Editor
                apiKey={process.env.REACT_APP_TINY_MCE}
                initialValue={html}
                init={{
                  menubar: false,
                  plugins: "code",
                  toolbar: "undo redo | formatselect | bold italic | code",
                }}
                onInit={(evt, editor) => (editorRef.current = editor)}
              />
            )}
          </div>
        </div>
      </Form>
      <Button onClick={onClick} type="primary">
        Get HTML Code
      </Button>
    </div>
  );
}

export default App;
