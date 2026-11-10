import StudioLayout from '../components/layout/StudioLayout';

export default function LegalPage({ type }) {
  const privacy = type === 'privacy';
  return <StudioLayout showCta={false} breadcrumb="M.A.D. Collaboratives"><section className="section studio-legal"><div className="container"><p className="l2">M.A.D. Collaboratives</p><h1 className="h2">{privacy ? 'Privacy' : 'Terms of use'}</h1>
    {privacy ? <><p>When you contact the studio, the information you choose to share (your name, contact details and project brief) is used only to respond to your enquiry.</p><p>Your cookie preference is stored in your browser. This website does not add advertising or analytics trackers. Display fonts are delivered by Adobe Fonts.</p><p>Online enquiries are not yet connected. Until they are, the enquiry form says so and sends nothing. Please contact the studio on Instagram.</p><p>Draft wording, pending review by the studio.</p></> : <><p>Projects on this website are shown as published by M.A.D. Collaboratives on Instagram and in Sylph Creatives’ Residence Issue. Photographs credited to Sylph Creatives are reproduced with attribution and link to their original posts.</p><p>Design scope, fees, timelines and deliverables are agreed separately in a written proposal.</p><p>All images and other materials remain the property of their respective owners.</p><p>Draft wording, pending review by the studio.</p></>}
    <a className="h5" href="/contact">Contact the studio ↗</a>
  </div></section></StudioLayout>;
}
