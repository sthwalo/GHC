import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src="/images/logo.png" alt="Global Hope Logo" className="h-8 w-auto" />
              <span className="font-bold text-xl">Global Hope</span>
            </div>
            <p className="text-gray-400">
              Empowering businesses through comprehensive solutions in software,
              administrative consultancy, transport, and electronics.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/software" className="text-gray-400 hover:text-white">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/accounting" className="text-gray-400 hover:text-white">
                  Accounting and Consultancy
                </Link>
              </li>
              <li>
                <Link to="/transport" className="text-gray-400 hover:text-white">
                  Transport Services
                </Link>
              </li>
              <li>
                <Link to="/electronics" className="text-gray-400 hover:text-white">
                  Electronics Resell
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">info@ghcons.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">+27 73 368-5971</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-400" />
                <span className="text-gray-400">124 Van Beek Street, Office 227 New Doornfontein 2094</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition duration-200">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Global Hope Consortium. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}