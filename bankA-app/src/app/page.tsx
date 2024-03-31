import { MortgageCalculator } from '@banking-web-apps/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.none file.
   */
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome bankA-app 👋
            </h1>
          </div>

          <div id="middle-content">
            <MortgageCalculator />
          </div>
        </div>
      </div>
    </>
  );
}
