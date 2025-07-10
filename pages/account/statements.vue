<script lang="ts" setup>
import Profile2 from "~/components/profile/Profile2.vue";
import CustomSelect from "~/elements/CustomSelect.vue";
import PageTitle from "~/lib/PageTitle.vue";
</script>

<template>
  <PageTitle name="Statements" title="Dashboard" />
  <div class="container-fluid">
    <Profile2 title="Statements" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-4">
          <div class="row">
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="heading mb-0">Earnings</h4>
                </div>
                <div class="card-body">
                  <p class="fs-14">Last 30 day earnings calculated. Apart from arranging the order of topics.</p>
                  <div class="row g-2 mb-3">
                    <div class="col-sm-4 col-6">
                      <div class="bg-light rounded p-3">
                        <h6 class="fs-15 mb-0">$6,840</h6>
                        <span class="fs-13">Net Earnings</span>
                      </div>
                    </div>
                    <div class="col-sm-4 col-6">
                      <div class="bg-light rounded p-3">
                        <h6 class="fs-15 mb-0">+17,8%</h6>
                        <span class="fs-13">Change</span>
                      </div>
                    </div>
                    <div class="col-sm-4 col-12">
                      <div class="bg-light rounded p-3">
                        <h6 class="fs-15 mb-0">$1,240</h6>
                        <span class="fs-13">Fees</span>
                      </div>
                    </div>
                  </div>
                  <a href="javascript:void(0);" class="btn btn-primary">Withdraw Earnings</a>
                </div>
              </div>
            </div>
            <div class="col-12">
              <div class="card">
                <div class="card-header">
                  <h4 class="heading mb-0">Invoices</h4>
                </div>
                <div class="card-body">
                  <p class="fs-14">Download apart from order of the good awesome invoice topics.</p>
                  <form action="#">
                    <div class="d-flex">
                      <div class="clearfix flex-grow-1">
                        <div class="dropdown bootstrap-select default-select form-control">
                          <CustomSelect :options="[{ title: 'Seller Annual Fee' }, { title: 'Seller Monthly Fee' }]" />
                        </div>
                      </div>
                      <div class="clearfix ms-3">
                        <button type="button" class="btn btn-primary px-3"><i class="fa fa-arrow-down"></i></button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xl-8">
          <div class="card">
            <div class="card-header border-0 py-3 d-block d-sm-flex">
              <h4 class="heading mb-0">Statement</h4>
              <ul class="nav nav-pills mt-3 mt-sm-0" id="myTab1" role="tablist">
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light active text-secondary"
                    id="week-tab1"
                    data-bs-toggle="tab"
                    data-bs-target="#tabWeek1"
                    type="button"
                    role="tab"
                    aria-controls="tabWeek1"
                    aria-selected="true"
                  >
                    Week
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="month-tab1"
                    data-bs-toggle="tab"
                    data-bs-target="#tabMonth1"
                    type="button"
                    role="tab"
                    aria-controls="tabMonth1"
                    aria-selected="false"
                  >
                    Month
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="year-tab1"
                    data-bs-toggle="tab"
                    data-bs-target="#tabYear1"
                    type="button"
                    role="tab"
                    aria-controls="tabYear1"
                    aria-selected="false"
                  >
                    Year
                  </button>
                </li>
                <li class="nav-item ms-1" role="presentation">
                  <button
                    class="nav-link btn btn-light text-secondary"
                    id="all-tab1"
                    data-bs-toggle="tab"
                    data-bs-target="#tabAll1"
                    type="button"
                    role="tab"
                    aria-controls="tabAll1"
                    aria-selected="false"
                  >
                    All
                  </button>
                </li>
              </ul>
            </div>
            <div class="card-body p-0">
              <div class="tab-content">
                <div class="tab-pane active" id="tabWeek1" role="tabpanel" aria-labelledby="week-tab1" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Order ID</th>
                          <th>Details</th>
                          <th>Amount</th>
                          <th class="text-end">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Nov 01, 2020</td>
                          <td>002445788</td>
                          <td>Darknight transparency 36 Icons Pack</td>
                          <td><span class="text-success">$38.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Oct 24, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-2.60</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Oct 08, 2020</td>
                          <td>002445788</td>
                          <td>Cartoon Mobile Emoji Phone Pack</td>
                          <td><span class="text-success">$76.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Sep 15, 2020</td>
                          <td>002445788</td>
                          <td>Iphone 12 Pro Mockup Mega Bundle</td>
                          <td><span class="text-success">$5.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>May 30, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-1.30</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Apr 22, 2020</td>
                          <td>002445788</td>
                          <td>Parcel Shipping / Delivery Service App</td>
                          <td><span class="text-success">$204.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Feb 09, 2020</td>
                          <td>002445788</td>
                          <td>Visual Design Illustration</td>
                          <td><span class="text-success">$31.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 17, 2020</td>
                          <td>002445788</td>
                          <td>Abstract Vusial Pack</td>
                          <td><span class="text-success">$52.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 04, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-0.80</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabMonth1" role="tabpanel" aria-labelledby="month-tab1" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Order ID</th>
                          <th>Details</th>
                          <th>Amount</th>
                          <th class="text-end">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Nov 01, 2020</td>
                          <td>002445788</td>
                          <td>Darknight transparency 36 Icons Pack</td>
                          <td><span class="text-success">$38.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Oct 24, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-2.60</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Sep 15, 2020</td>
                          <td>002445788</td>
                          <td>Iphone 12 Pro Mockup Mega Bundle</td>
                          <td><span class="text-success">$5.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>May 30, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-1.30</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Apr 22, 2020</td>
                          <td>002445788</td>
                          <td>Parcel Shipping / Delivery Service App</td>
                          <td><span class="text-success">$204.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Feb 09, 2020</td>
                          <td>002445788</td>
                          <td>Visual Design Illustration</td>
                          <td><span class="text-success">$31.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 17, 2020</td>
                          <td>002445788</td>
                          <td>Abstract Vusial Pack</td>
                          <td><span class="text-success">$52.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 04, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-0.80</span></td>
                          <td class="text-end"><button type="button" class="btn btn-sm btn-light">Download</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabYear1" role="tabpanel" aria-labelledby="year-tab1" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Order ID</th>
                          <th>Details</th>
                          <th>Amount</th>
                          <th class="text-end">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Oct 24, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-2.60</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Oct 08, 2020</td>
                          <td>002445788</td>
                          <td>Cartoon Mobile Emoji Phone Pack</td>
                          <td><span class="text-success">$76.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Sep 15, 2020</td>
                          <td>002445788</td>
                          <td>Iphone 12 Pro Mockup Mega Bundle</td>
                          <td><span class="text-success">$5.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>May 30, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-1.30</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Apr 22, 2020</td>
                          <td>002445788</td>
                          <td>Parcel Shipping / Delivery Service App</td>
                          <td><span class="text-success">$204.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Feb 09, 2020</td>
                          <td>002445788</td>
                          <td>Visual Design Illustration</td>
                          <td><span class="text-success">$31.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 04, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-0.80</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div class="tab-pane" id="tabAll1" role="tabpanel" aria-labelledby="all-tab1" tabindex="0">
                  <div class="table-responsive">
                    <table class="table mb-1 table-striped-thead table-wide table-sm table-border-last-0">
                      <thead>
                        <tr>
                          <th>Date</th>
                          <th>Order ID</th>
                          <th>Details</th>
                          <th>Amount</th>
                          <th class="text-end">Invoice</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Nov 01, 2020</td>
                          <td>002445788</td>
                          <td>Darknight transparency 36 Icons Pack</td>
                          <td><span class="text-success">$38.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Oct 24, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-2.60</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Sep 15, 2020</td>
                          <td>002445788</td>
                          <td>Iphone 12 Pro Mockup Mega Bundle</td>
                          <td><span class="text-success">$5.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>May 30, 2020</td>
                          <td>002445788</td>
                          <td>Seller Fee</td>
                          <td><span class="text-danger">$-1.30</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Apr 22, 2020</td>
                          <td>002445788</td>
                          <td>Parcel Shipping / Delivery Service App</td>
                          <td><span class="text-success">$204.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Feb 09, 2020</td>
                          <td>002445788</td>
                          <td>Visual Design Illustration</td>
                          <td><span class="text-success">$31.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
                        </tr>
                        <tr>
                          <td>Jan 17, 2020</td>
                          <td>002445788</td>
                          <td>Abstract Vusial Pack</td>
                          <td><span class="text-success">$52.00</span></td>
                          <td class="text-end"><button type="button" class="btn btn-xxs btn-light">Download</button></td>
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
