export default function RecentDonations() {
  return (
  <section>
    <h2>Recent Donations</h2>
    {donations.map((donation, index) => 
    <ul><li><span>
      {donation.name} donated {donation.amount}
    </span>{donation.caption}</li>
    </ul>)}
  </section>
  ) 
}
