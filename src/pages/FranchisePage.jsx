import React from 'react';
import FranchiseHero from '../components/franchise/FranchiseHero';
import WhyInvest from '../components/franchise/WhyInvest';
import FranchiseModels from '../components/franchise/FranchiseModels';
import InvestmentReturns from '../components/franchise/InvestmentReturns';
import PartnerSupport from '../components/franchise/PartnerSupport';
import LaunchJourney from '../components/franchise/LaunchJourney';
import LeadForm from '../components/franchise/LeadForm';

const FranchisePage = () => {
  return (
    <div className="overflow-hidden">
      <FranchiseHero />
      <WhyInvest />
      <FranchiseModels />
      <InvestmentReturns />
      <PartnerSupport />
      <LaunchJourney />
      <LeadForm />
    </div>
  );
};

export default FranchisePage;
