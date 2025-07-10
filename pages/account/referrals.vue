<script lang="ts" setup>
import Profile2 from "~/components/profile/Profile2.vue";
import PageTitle from "~/lib/PageTitle.vue";
</script>

<template>
  <PageTitle name="Referrals" title="Dashboard" />
  <div class="container-fluid">
    <Profile2 title="Referrals" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-6">
          <div class="card">
            <div class="card-header">
              <h4 class="heading mb-0">Referral Program</h4>
            </div>
            <div class="card-body">
              <div class="row mb-3">
                <div class="col-lg-6 mb-3">
                  <h6 class="mb-1 fw-semibold">How to use Referral Program</h6>
                  <p class="fs-14">Elevate your post: Integrate images for impact, smooth flow, humor, and clarity on complex subjects</p>
                  <a href="javascript:void(0);" class="btn btn-light">Get Started</a>
                </div>
                <div class="col-lg-6 mb-3">
                  <h6 class="mb-1 fw-semibold">Your Referral Link</h6>
                  <p class="fs-14">Craft your blog post: Choose a topic, outline, research, and fact-check diligently</p>
                  <div class="select-text-wrap">
                    <div class="text-select-copy border border-secondary border-opacity-10 px-3 py-2 rounded mb-3 text-primary">https://dexginzoen.com/reffer/</div>
                    <button type="button" class="btn btn-light btn-select-text">Copy Link</button>
                  </div>
                </div>
              </div>
              <div class="row mb-2">
                <div class="col-lg-3 col-sm-6 mb-3">
                  <div class="bg-purple-light rounded p-3 text-center">
                    <h3 class="mb-0 fw-semibold">$62,250.00</h3>
                    <span class="fs-14 text-purple">Net Earnings</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-3">
                  <div class="bg-success-light rounded p-3 text-center">
                    <h3 class="mb-0 fw-semibold">$7,325.00</h3>
                    <span class="fs-14 text-success">Balance</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-3">
                  <div class="bg-danger-light rounded p-3 text-center">
                    <h3 class="mb-0 fw-semibold">$5,500</h3>
                    <span class="fs-14 text-danger">Avg Deal Size</span>
                  </div>
                </div>
                <div class="col-lg-3 col-sm-6 mb-3">
                  <div class="bg-primary-light rounded p-3 text-center">
                    <h3 class="mb-0 fw-semibold">780</h3>
                    <span class="fs-14 text-primary">Referral Signups</span>
                  </div>
                </div>
              </div>
              <div class="mb-4">
                <p class="fs-14 mb-0">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took
                  a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                  unchanged.
                </p>
              </div>
              <div class="alert alert-outline-light bg-light bg-opacity-25 outline-dashed p-3 d-sm-flex align-items-center">
                <i class="fa-solid fa-building-columns text-primary fs-24 align-self-start"></i>
                <div class="mx-sm-3 my-3 my-sm-0">
                  <h6 class="fs-14 fw-semibold mb-1">Withdraw Your Funds to Bank</h6>
                  <p class="fs-14 mb-0">Securely withdraw money to your bank account, with a $25 fee.</p>
                </div>
                <div class="clearfix flex-shrink-0 ms-sm-auto">
                  <a href="javascript:void(0);" class="btn btn-primary">Withdraw Money</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-6">
          <div class="card h-auto">
            <div class="card-header border-0 py-3 d-block d-sm-flex">
              <h4 class="heading mb-0">Referred Users</h4>
              <ul class="nav nav-pills mt-3 mt-sm-0" id="myTab2" role="tablist">
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light active text-secondary"
                    id="week-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#tabWeek2"
                    type="button"
                    role="tab"
                    aria-controls="tabWeek2"
                    aria-selected="true"
                  >
                    Week
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="month-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#tabMonth2"
                    type="button"
                    role="tab"
                    aria-controls="tabMonth2"
                    aria-selected="false"
                  >
                    Month
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="year-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#tabYear2"
                    type="button"
                    role="tab"
                    aria-controls="tabYear2"
                    aria-selected="false"
                  >
                    Year
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="all-tab2"
                    data-bs-toggle="tab"
                    data-bs-target="#tabAll2"
                    type="button"
                    role="tab"
                    aria-controls="tabAll2"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="tab-content">
                <div class="tab-pane active" id="tabWeek2" role="tabpanel" aria-labelledby="week-tab2" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Bonus</th>
                          <th class="text-end">Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>678935899</td>
                          <td>Marcus Harris</td>
                          <td>Nov 24, 2020</td>
                          <td>26%</td>
                          <td class="text-end"><span class="text-success">$620.00</span></td>
                        </tr>
                        <tr>
                          <td>578433345</td>
                          <td>Maria Garcia</td>
                          <td>Aug 10, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$1,200.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Robert Smith</td>
                          <td>May 06, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$940.00</span></td>
                        </tr>
                        <tr>
                          <td>098669322</td>
                          <td>Williams Brown</td>
                          <td>Apr 30, 2020</td>
                          <td>18%</td>
                          <td class="text-end"><span class="text-success">$200.00</span></td>
                        </tr>
                        <tr>
                          <td>245899092</td>
                          <td>Paul Johnson</td>
                          <td>Feb 29, 2020</td>
                          <td>21%</td>
                          <td class="text-end"><span class="text-success">$380.00</span></td>
                        </tr>
                        <tr>
                          <td>505432578</td>
                          <td>Sarah Jones</td>
                          <td>Jan 08, 2020</td>
                          <td>47%</td>
                          <td class="text-end"><span class="text-success">$2,050.00</span></td>
                        </tr>
                        <tr>
                          <td>256899235</td>
                          <td>Juan Carlos</td>
                          <td>Jan 02, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$820.00</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabMonth2" role="tabpanel" aria-labelledby="month-tab2" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Bonus</th>
                          <th class="text-end">Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>098669322</td>
                          <td>Williams Brown</td>
                          <td>Apr 30, 2020</td>
                          <td>18%</td>
                          <td class="text-end"><span class="text-success">$200.00</span></td>
                        </tr>
                        <tr>
                          <td>245899092</td>
                          <td>Paul Johnson</td>
                          <td>Feb 29, 2020</td>
                          <td>21%</td>
                          <td class="text-end"><span class="text-success">$380.00</span></td>
                        </tr>
                        <tr>
                          <td>505432578</td>
                          <td>Sarah Jones</td>
                          <td>Jan 08, 2020</td>
                          <td>47%</td>
                          <td class="text-end"><span class="text-success">$2,050.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Marcus Harris</td>
                          <td>Nov 24, 2020</td>
                          <td>26%</td>
                          <td class="text-end"><span class="text-success">$620.00</span></td>
                        </tr>
                        <tr>
                          <td>578433345</td>
                          <td>Maria Garcia</td>
                          <td>Aug 10, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$1,200.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Robert Smith</td>
                          <td>May 06, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$940.00</span></td>
                        </tr>
                        <tr>
                          <td>256899235</td>
                          <td>Juan Carlos</td>
                          <td>Jan 02, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$820.00</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabYear2" role="tabpanel" aria-labelledby="year-tab2" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Bonus</th>
                          <th class="text-end">Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>578433345</td>
                          <td>Maria Garcia</td>
                          <td>Aug 10, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$1,200.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Marcus Harris</td>
                          <td>Nov 24, 2020</td>
                          <td>26%</td>
                          <td class="text-end"><span class="text-success">$620.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Robert Smith</td>
                          <td>May 06, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$940.00</span></td>
                        </tr>
                        <tr>
                          <td>245899092</td>
                          <td>Paul Johnson</td>
                          <td>Feb 29, 2020</td>
                          <td>21%</td>
                          <td class="text-end"><span class="text-success">$380.00</span></td>
                        </tr>
                        <tr>
                          <td>505432578</td>
                          <td>Sarah Jones</td>
                          <td>Jan 08, 2020</td>
                          <td>47%</td>
                          <td class="text-end"><span class="text-success">$2,050.00</span></td>
                        </tr>
                        <tr>
                          <td>098669322</td>
                          <td>Williams Brown</td>
                          <td>Apr 30, 2020</td>
                          <td>18%</td>
                          <td class="text-end"><span class="text-success">$200.00</span></td>
                        </tr>
                        <tr>
                          <td>256899235</td>
                          <td>Juan Carlos</td>
                          <td>Jan 02, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$820.00</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabAll2" role="tabpanel" aria-labelledby="all-tab2" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Order ID</th>
                          <th>User</th>
                          <th>Date</th>
                          <th>Bonus</th>
                          <th class="text-end">Profit</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>678935899</td>
                          <td>Marcus Harris</td>
                          <td>Nov 24, 2020</td>
                          <td>26%</td>
                          <td class="text-end"><span class="text-success">$620.00</span></td>
                        </tr>
                        <tr>
                          <td>505432578</td>
                          <td>Sarah Jones</td>
                          <td>Jan 08, 2020</td>
                          <td>47%</td>
                          <td class="text-end"><span class="text-success">$2,050.00</span></td>
                        </tr>
                        <tr>
                          <td>256899235</td>
                          <td>Juan Carlos</td>
                          <td>Jan 02, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$820.00</span></td>
                        </tr>
                        <tr>
                          <td>578433345</td>
                          <td>Maria Garcia</td>
                          <td>Aug 10, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$1,200.00</span></td>
                        </tr>
                        <tr>
                          <td>678935899</td>
                          <td>Robert Smith</td>
                          <td>May 06, 2020</td>
                          <td>35%</td>
                          <td class="text-end"><span class="text-success">$940.00</span></td>
                        </tr>
                        <tr>
                          <td>098669322</td>
                          <td>Williams Brown</td>
                          <td>Apr 30, 2020</td>
                          <td>18%</td>
                          <td class="text-end"><span class="text-success">$200.00</span></td>
                        </tr>
                        <tr>
                          <td>245899092</td>
                          <td>Paul Johnson</td>
                          <td>Feb 29, 2020</td>
                          <td>21%</td>
                          <td class="text-end"><span class="text-success">$380.00</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
