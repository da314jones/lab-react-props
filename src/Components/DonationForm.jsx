import React from "react";

function DonationForm(props) {
  const donationIndex = (donations) => {
    return donations.length + 1
  }
  return (
    <section className="donation">
      <h3>
        You could be donation <span className="secondary">#{donationIndex(props.donations)}!</span>
      </h3>
      <form>
        <label htmlFor="name">
          Name
          <input id="name" name="name" type="text" placeholder="Your name..." />
        </label>
        <label htmlFor="caption">
          Caption
          <input
            id="caption"
            name="caption"
            type="text"
            placeholder="Add a brief message..."
          />
        </label>
        <label htmlFor="amount">
          Amount
          <input id="amount" name="amount" type="number" placeholder="0" />
        </label>
        <button>Donate!</button>
      </form>
    </section>
  );
}
export default DonationForm;
