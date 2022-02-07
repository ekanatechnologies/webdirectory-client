import React from "react";

const PaidDirectories = () => {
  return (
    <div className="container-fluid" style={{ background: "#f6f6f6" }}>
      <div className="d-flex align-items-center justify-content-center py-3 flex-column">
        <div
          className="d-flex align-items-center justify-content-start py-3 px-3 "
          style={{ width: "80%", background: "#fff" }}
        >
          <strong className="mr-2 text-center" style={{ paddingRight: "5px" }}>
            Home
            <span style={{ color: "#f38e35" }}>
              <i class="bi bi-caret-right"></i>
            </span>
          </strong>{" "}
          Paid Directory List
        </div>
        <div
          style={{ width: "80%", background: "#fff" }}
          className="my-5 d-flex ailgn-items-center justify-content-center flex-column"
        >
          <h4 className="text-center py-4 text-black  " style={{fontWeight:'bold' ,color:'#000406'}}>
            General Paid Directory List
          </h4>
          <p className="text-secondary font-weight-bold text-left px-5 mb-5">
            This is an alphabetical list of SEO Friendly paid directories that
            require a fee in order to be reviewed for possible inclusion into
            their listings. Many of them also offer different options such as
            deep linking, multiple links and premium placement. These are the
            only pay for inclusion directories we recommend as the owners have
            met a very strict standard that we apply to these types of
            directories. They place a priority on quality content, unique
            design, traffic for the listed sites, and ensuring that they remain
            spam free.
          </p>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th scope="col">WD Rank</th>
                <th scope="col">Directory Name</th>
                <th scope="col">Directory URL</th>
                <th scope="col">Price ($US)</th>
                <th scope="col">Pagerank</th>
                <th scope="col">AlexaRank</th>
                <th scope="col">Directory Script</th>
                <th scope="col">Description Limit</th>
                <th scope="col">Date Added To List</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
              <tr>
                <th scope="row">1</th>
                <td>
                  {" "}
                  <p>A1WebDirectory </p>
                </td>
                <td>
                  {" "}
                  <a href="http://www.a1webdirectory.org/">
                    http://www.a1webdirectory.org/
                  </a>{" "}
                </td>
                <td>9.95</td>
                <td>0</td>
                <td>850292 </td>
                <td>phpLD</td>
                <td>200</td>
                <td>04/23/2020</td>
                <td>
                  <a href="#"> details</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaidDirectories;
