import MadMark from "./MadMark";
import BrandSeal from "./BrandSeal";
import SocialLinks from "./SocialLinks";
const fields = [
  { name: "name", label: "Your name", autoComplete: "name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "phone", label: "Phone", type: "tel", autoComplete: "tel" },
  { name: "project_type", label: "Project type", options: ["Apartment", "House / villa", "Commercial", "Architecture", "Other"], required: true },
  { name: "project_location", label: "Project location", autoComplete: "address-level2" },
  { name: "budget", label: "Approximate budget (optional)" },
  { name: "message", label: "Tell us about the space", type: "textarea", required: true },
];

const connected = Boolean(import.meta.env.VITE_CONTACT_ENDPOINT);

/** Project enquiry modal. Interactions are managed by useSiteExperience. */
export default function CallModal() {
  return (
    <div data-modal-cta="book-a-call" className="modal">
      <div className="modal_c">
        <div className="modal_cta theme_on-brand">
          <div className="grid">
            <div
              data-lenis-scroll=""
              data-modal-container=""
              className="modal_cta_c"
            >
              <div className="modal_cta_close">
                <div data-modal-close="" hover-btn="" className="btn-ico">
                  <a
                    aria-label="Close"
                    href="#"
                    className="btn-ico_link w-inline-block"
                  />
                  <div hover="ico" className="btn_ico">
                    <div className="ico-16">
                      <div className="ico w-embed">
                        <svg
                          width="100%"
                          height="100%"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M11.5292 3.52827C11.7896 3.26792 12.2123 3.26792 12.4726 3.52827C12.733 3.78862 12.733 4.21128 12.4726 4.47163L8.94429 7.99995L12.4726 11.5283C12.733 11.7886 12.733 12.2113 12.4726 12.4716C12.2123 12.732 11.7896 12.732 11.5292 12.4716L8.00093 8.94331L4.47261 12.4716C4.21226 12.732 3.7896 12.732 3.52925 12.4716C3.2689 12.2113 3.2689 11.7886 3.52925 11.5283L7.05757 7.99995L3.52925 4.47163C3.2689 4.21128 3.2689 3.78862 3.52925 3.52827C3.7896 3.26792 4.21226 3.26792 4.47261 3.52827L8.00093 7.05659L11.5292 3.52827Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="btn_bg">
                    <div hover="bg" className="btn_bg_fill" />
                  </div>
                </div>
              </div>
              <div id="book-a-call" className="modal_cta_form w-form">
                <form
                  id="wf-form-Book-a-call"
                  name="wf-form-Book-a-call"
                  data-name="Let\u2019s talk"
                  method="post"
                  className="form_block"
                >
                  <div className="modal_cta_l">
                    <div className="modal_cta_l_t">
                      <div className="modal_cta_a">
                        <h1 className="a2 b-desk">Let’s talk</h1>
                        <div className="a1 b-mob">Let’s talk</div>
                      </div>
                      <div className="u-24" />
                    </div>
                    <div className="modal_cta_l_b">
                      <div className="modal_cta_desc">
                        <div
                          aria-label="M.A.D. Collaboratives"
                          className="logo_symbol ico-48 b-mob"
                        >
                          <div className="logo w-embed">
                            <MadMark />
                          </div>
                        </div>
                        <div className="u-32 b-mob" />
                        <p className="l1 mob_a-center">
                          Tell us about your space, the way you live and what
                          matters most to you.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="modal_cta_c_c">
                    <div className="modal_cta_c_line">
                      <div data-scroll-reveal="line" className="line-v" />
                    </div>
                    <div className="modal_cta_c_logo">
                      <div
                        aria-label="M.A.D. Collaboratives"
                        className="logo_symbol header"
                      >
                        <div className="logo w-embed">
                          <MadMark />
                        </div>
                      </div>
                      <div className="header-logo_bg b-mob w-embed">
                        <BrandSeal />
                      </div>
                      <div className="header-logo_bg b-desk w-embed">
                        <BrandSeal />
                      </div>
                    </div>
                    <div className="modal_cta_c_line">
                      <div data-scroll-reveal="line" className="line-v" />
                    </div>
                  </div>
                  <div className="modal_cta_r">
                    <div className="modal_cta_form_c">
                      <div className="form_block_t">
                        <div className="u-32 b-desk" />
                        <div className="u-96 b-mob" />
                      </div>
                      <div className="form_block_list">
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="title"
                          data-name="title"
                          placeholder=""
                          type="text"
                          id="title"
                        />
                        {fields.map((field) => (
                          <div className="input" key={field.name}>
                            <div className="input_label">
                              <label htmlFor={field.name} className="l1 reg">
                                {field.label}:
                              </label>
                            </div>
                            {field.options ? (
                              <select id={field.name} name={field.name} className="input_field l1 w-input mad-select" required={field.required} defaultValue="">
                                <option value="" disabled>
                                  Select
                                </option>
                                {field.options.map((option) => (
                                  <option key={option}>{option}</option>
                                ))}
                              </select>
                            ) : field.type === "textarea" ? (
                              <textarea id={field.name} name={field.name} maxLength={5000} className="input_field area l1 w-input" defaultValue="" required={field.required} />
                            ) : (
                              <input
                                className="input_field l1 w-input"
                                autoComplete={field.autoComplete}
                                maxLength={256}
                                name={field.name}
                                type={field.type || "text"}
                                id={field.name}
                                required={field.required}
                              />
                            )}
                          </div>
                        ))}
                        {!connected && (
                          <p className="p2 mad-form-notice" role="note">
                            Online enquiries are not connected yet. Until they are, please message{" "}
                            <a className="text-link inline" href="https://www.instagram.com/m.a.d_collaboratives/" target="_blank" rel="noopener noreferrer">
                              @m.a.d_collaboratives
                            </a>{" "}
                            on Instagram.
                          </p>
                        )}
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_source"
                          data-name="utm_source"
                          placeholder=""
                          type="text"
                          id="utm_source"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_medium"
                          data-name="utm_medium"
                          placeholder=""
                          type="text"
                          id="utm_medium"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_campaign"
                          data-name="utm_campaign"
                          placeholder=""
                          type="text"
                          id="utm_campaign"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_content"
                          data-name="utm_content"
                          placeholder=""
                          type="text"
                          id="utm_content"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="utm_url"
                          data-name="utm_url"
                          placeholder=""
                          type="text"
                          id="utm_url"
                        />
                        <input
                          className="d-none w-input"
                          maxLength={256}
                          name="page_url"
                          data-name="page_url"
                          placeholder=""
                          type="text"
                          id="page_url"
                        />
                        <div className="u-160 b-mob" />
                      </div>
                      <div className="form_block_b">
                        <div className="form_block_legal">
                          <div className="p2 inline">
                            By submitting, you agree to our{" "}
                          </div>
                          <div
                            data-text="p"
                            className="legal-cms inline w-dyn-list"
                          >
                            <div
                              data-comma-list=""
                              role="list"
                              className="legal-cms_list inline w-dyn-items"
                            >
                              <div
                                role="listitem"
                                className="legal-cms_list_item inline w-dyn-item"
                              >
                                <a
                                  href="/privacy"
                                  target="_blank"
                                  className="text-link inline w-inline-block"
                                  rel="noopener noreferrer"
                                >
                                  <div className="p2 inline">
                                    Privacy policy
                                  </div>
                                </a>
                                <div data-comma="" className="p2 inline">
                                  ,{" "}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a
                          data-form-btn=""
                          hover-btn=""
                          hover-nav-item=""
                          aria-label="Submit"
                          href="#"
                          className="btn w-inline-block"
                        >
                          <div className="btn_label">
                            <div className="btn_label_text">
                              <div hover="text" className="l1">
                                Submit
                              </div>
                            </div>
                            <div className="btn_label_text is-2">
                              <div hover="text" className="l1">
                                Submit
                              </div>
                            </div>
                          </div>
                          <div className="btn_bg">
                            <div hover="bg" className="btn_bg_fill" />
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="form_success w-form-done">
                  <div className="form_success_c">
                    <div className="form_success_title">
                      <p className="l1 a-center">We’ve received your request</p>
                      <div className="u-160 b-mob" />
                    </div>
                    <div className="form_success_a">
                      <p className="a2 a-center">Thank you</p>
                    </div>
                    <div className="form_success_social">
                      <div className="u-96 b-mob" />
                      <SocialLinks />
                    </div>
                    <div className="form_success_desc">
                      <div className="u-48 b-mob" />
                      <p className="p1 a-center">
                        The studio will review your brief and reply
                        personally.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="form_error theme_on-dark w-form-fail">
                  <div className="l1 a-center">
                    Oops! Something went wrong while submitting the form.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-modal-close="" data-modal-over="" className="modal_over" />
    </div>
  );
}
