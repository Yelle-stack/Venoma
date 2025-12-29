import React from 'react'

const Footer = () => {
  return (
    <footer className='pt-24'>
      <div className="container mx-auto">
        {/* category links */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-10">
          {/* 1 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2">Products</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Shoes
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Clothing
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Accesoires
                  </a>
              </li>
                <li>
                <a href="#" className="link-secondary">
                  Gift Cards
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  New Arrivals
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Best Sellers
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Sale
                  </a>
              </li>
            </ul>
          </div>
          {/* 2 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2">Resources</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Find A Store
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Become A Member
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Student Discounts
                  </a>
              </li>
                <li>
                <a href="#" className="link-secondary">
                  Send Us Feedback
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Golf Shorts
                  </a>
              </li>
            </ul>
          </div>
          {/* 3 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2">Help</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  Get Help
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Order Status
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Delivery
                  </a>
              </li>
                <li>
                <a href="#" className="link-secondary">
                  Returns
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Payment Options
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Contact Us
                  </a>
              </li>
            </ul>
          </div>
          {/* 4 */}
          <div>
            <h6 className="h6 pb-4 mb-6 border-b-2">Company</h6>
            <ul className="flex flex-col gap-4">
              <li>
                <a href="#" className="link-secondary">
                  About Venoma
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  News
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Careers
                  </a>
              </li>
                <li>
                <a href="#" className="link-secondary">
                  Investors
                  </a>
              </li>
              <li>
                <a href="#" className="link-secondary">
                  Sustainability
                  </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
