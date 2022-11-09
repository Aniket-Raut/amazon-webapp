import './footer.css';

export const Footer=()=>{
    return (
      <div className="footer">
        <div className="footer-row to-top">Back to top</div>

        <div className="footer-row row-links-container">
          <div className="links">
            <div className="link-title">Get to Know Us</div>
            <div className="link-item">About Us</div>
            <div className="link-item">Careers</div>
            <div className="link-item">Press Releases</div>
            <div className="link-item">Amazon Science</div>
          </div>

          <div className="links">
            <div className="link-title">Connect with Us</div>
            <div className="link-item">Facebook</div>
            <div className="link-item">Twitter</div>
            <div className="link-item">Instagram</div>
          </div>

          <div className="links">
            <div className="link-title">Make Money with Us</div>
            <div className="link-item">Sell on Amazon</div>
            <div className="link-item">Sell under Amazon Accelarator</div>
            <div className="link-item">Amazon Global Selling</div>
            <div className="link-item">Become an Affiliate</div>
            <div className="link-item">Fulfilment by Amazon</div>
            <div className="link-item">Advertise Your Products </div>
            <div className="link-item">Amazon Pay on Merchants</div>
          </div>

          <div className="links">
            <div className="link-title">Let Us Help You</div>
            <div className="link-item">COVID-19 and Amazon</div>
            <div className="link-item">Your Account</div>
            <div className="link-item">Returns Centre</div>
            <div className="link-item">100% Purchase Protection</div>
            <div className="link-item">Amazon App Download</div>
            <div className="link-item">Amazon Assistant Download</div>
            <div className="link-item">Help</div>
          </div>
        </div>

        <div className="footer-row last-row">
          <table className='last-row-link-table'>
            <tbody className="footer-link-table">
              <tr>
                <td>
                  <a>
                    <span className="footer-final-title">{"AbeBooks\n"}</span>
                    <span className="footer-final-item">{"Books, art\n"}</span>
                    <span className="footer-final-item">{"& collections"}</span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">
                      {"Amazon Web Services\n"}
                    </span>
                    <span className="footer-final-item">
                      {"Scalable Cloud\n"}
                    </span>
                    <span className="footer-final-item">
                      {"Computing Services"}
                    </span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">{"Audible\n"}</span>
                    <span className="footer-final-item">{"Download\n"}</span>
                    <span className="footer-final-item">{"Audio Books"}</span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">{"DPReview\n"}</span>
                    <span className="footer-final-item">{"Digital\n"}</span>
                    <span className="footer-final-item">{"Photography"}</span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">{"IMDb\n"}</span>
                    <span className="footer-final-item">{"Movies, TV\n"}</span>
                    <span className="footer-final-item">{"& Celebrities"}</span>
                  </a>
                </td>
              </tr>

              <tr>
                <td>
                  <a>
                    <span className="footer-final-title">{"Shopbop\n"}</span>
                    <span className="footer-final-item">{"Designer\n"}</span>
                    <span className="footer-final-item">
                      {"Fashion Brands"}
                    </span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">
                      {"Amazon Business\n"}
                    </span>
                    <span className="footer-final-item">
                      {"Everything for\n"}
                    </span>
                    <span className="footer-final-item">{"Your Business"}</span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">{"Prime Now\n"}</span>
                    <span className="footer-final-item">
                      {"2-Hour Delivery\n"}
                    </span>
                    <span className="footer-final-item">
                      {"on Everyday Items"}
                    </span>
                  </a>
                </td>
                <td>
                  <a>
                    <span className="footer-final-title">
                      {"Amazon Prime Music\n"}
                    </span>
                    <span className="footer-final-item">
                      {"90 million songs, ad-free\n"}
                    </span>
                    <span className="footer-final-item">
                      {"Over 15 million podcast episodes"}
                    </span>
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
          <div className='footer-legal-row'>
            <ul>
                <li>Conditions of Use & Sale</li>
                <li>Privacy Notice</li>
                <li>interest-Based Ads</li>
            </ul>
            <span>© 1996-2022, Amazon.com, Inc. or its affiliates</span>
          </div>
        </div>
      </div>
    );
}