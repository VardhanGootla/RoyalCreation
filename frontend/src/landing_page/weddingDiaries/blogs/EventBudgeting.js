import React from 'react';
import Navbar from '../../../../Navbar';
import Footer from '../../../../Footer';

const EventBudgeting = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-8" style={{ color: 'rgb(255, 102, 163)' }}>
          How to Create a Realistic Event Budget
        </h1>
        
        <div className="prose lg:prose-xl mx-auto">
          <p className="text-lg mb-6">
            Planning an event budget can be daunting, but with proper organization and realistic expectations, 
            you can create a financial plan that ensures your event is both memorable and affordable.
          </p>
          
          <div className="bg-blue-50 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-semibold mb-3">Quick Budget Overview</h3>
            <p><strong>Golden Rule:</strong> Always allocate 10-15% for unexpected expenses!</p>
          </div>

          <ol className="list-decimal list-inside space-y-6">
            <li>
              <strong>Determine Your Total Budget</strong>
              <p className="ml-6 mt-2">Start by establishing the maximum amount you're willing to spend. Be realistic about what you can afford and stick to this number.</p>
            </li>
            
            <li>
              <strong>Identify Your Non-Negotiables</strong>
              <p className="ml-6 mt-2">List your top 3 priorities (e.g., venue, catering, photography). These items should receive the largest portion of your budget.</p>
            </li>
            
            <li>
              <strong>Research Average Costs</strong>
              <p className="ml-6 mt-2">Investigate current market prices for venues, vendors, and services in your area to set realistic expectations.</p>
            </li>
            
            <li>
              <strong>Create Detailed Categories</strong>
              <p className="ml-6 mt-2">Break down your budget into specific categories:
                <ul className="list-disc ml-8 mt-3 space-y-1">
                  <li><strong>Venue & Rental Fees</strong> (25-30%)</li>
                  <li><strong>Catering & Bar Service</strong> (30-35%)</li>
                  <li><strong>Photography & Videography</strong> (10-15%)</li>
                  <li><strong>Attire & Beauty</strong> (5-10%)</li>
                  <li><strong>Entertainment & Music</strong> (5-10%)</li>
                  <li><strong>Decor & Flowers</strong> (5-10%)</li>
                  <li><strong>Stationery & Invitations</strong> (2-3%)</li>
                  <li><strong>Transportation</strong> (2-3%)</li>
                  <li><strong>Miscellaneous & Emergency Fund</strong> (10-15%)</li>
                </ul>
              </p>
            </li>
            
            <li>
              <strong>Track Every Expense</strong>
              <p className="ml-6 mt-2">Use a spreadsheet or budgeting app to record all deposits, payments, and receipts. Update it regularly.</p>
            </li>
            
            <li>
              <strong>Negotiate with Vendors</strong>
              <p className="ml-6 mt-2">Don't be afraid to ask for package deals or off-season discounts. Many vendors are willing to work within your budget.</p>
            </li>
            
            <li>
              <strong>Plan for Hidden Costs</strong>
              <p className="ml-6 mt-2">Remember to include taxes, service charges, gratuities, and overtime fees that often get overlooked.</p>
            </li>
            
            <li>
              <strong>Set Up a Payment Schedule</strong>
              <p className="ml-6 mt-2">Coordinate deposit due dates with your pay schedule to avoid financial strain.</p>
            </li>
            
            <li>
              <strong>Review and Adjust Regularly</strong>
              <p className="ml-6 mt-2">Revisit your budget monthly and make adjustments as needed. Be prepared to cut non-essential items if necessary.</p>
            </li>
            
            <li>
              <strong>Use Budgeting Tools</strong>
              <p className="ml-6 mt-2">Consider using event planning apps or templates specifically designed for event budgeting.</p>
            </li>
          </ol>

          <div className="bg-green-50 p-6 rounded-lg mt-8">
            <h3 className="text-xl font-semibold mb-3">Pro Tips for Budget Success</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Create a separate email account for all event-related communications and receipts</li>
              <li>Set up a dedicated savings account for your event funds</li>
              <li>Consider event insurance for major unforeseen circumstances</li>
              <li>Remember that DIY isn't always cheaper - factor in your time and materials</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EventBudgeting;