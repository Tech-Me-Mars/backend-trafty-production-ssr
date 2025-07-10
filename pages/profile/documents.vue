<script lang="ts" setup>
import Profile from "~/components/profile/Profile.vue";
import PageTitle from "~/lib/PageTitle.vue";
</script>

<template>
  <PageTitle name="Documents" title="Dashboard" />
  <div class="container-fluid">
    <Profile title="Documents" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h5 class="mb-0">Documents</h5>
        <div class="d-flex align-items-center">
          <ul class="nav nav-pills" id="myTabView" role="tablist">
            <li class="nav-item ms-1" role="presentation">
              <button
                class="nav-link btn btn-light btn-sharp p-0 active"
                id="project-list-tab"
                data-bs-toggle="tab"
                data-bs-target="#project-list-pane"
                type="button"
                role="tab"
                aria-controls="project-list-pane"
                aria-selected="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-list"
                >
                  <line x1="8" y1="6" x2="21" y2="6"></line>
                  <line x1="8" y1="12" x2="21" y2="12"></line>
                  <line x1="8" y1="18" x2="21" y2="18"></line>
                  <line x1="3" y1="6" x2="3.01" y2="6"></line>
                  <line x1="3" y1="12" x2="3.01" y2="12"></line>
                  <line x1="3" y1="18" x2="3.01" y2="18"></line>
                </svg>
              </button>
            </li>
            <li class="nav-item ms-1" role="presentation">
              <button
                class="nav-link btn btn-light btn-sharp p-0"
                id="project-grid-tab"
                data-bs-toggle="tab"
                data-bs-target="#project-grid-pane"
                type="button"
                role="tab"
                aria-controls="project-grid-pane"
                aria-selected="false"
                tabindex="-1"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-grid"
                >
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div class="tab-content" id="myTabContentView">
        <div class="tab-pane fade show active" id="project-list-pane" role="tabpanel" aria-labelledby="project-list-tab" tabindex="0">
          <div class="row">
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/folder.png" width="45" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">CRUD Invoices</h6>
                    <span class="fs-14">12 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/folder.png" width="45" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Tower Hill Docs</h6>
                    <span class="fs-14">17 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/folder.png" width="45" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Mivy App</h6>
                    <span class="fs-14">12 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/folder.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Leaf CRM API Co..</h6>
                    <span class="fs-14">21 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/csv.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Tower Hill bilboa..</h6>
                    <span class="fs-14">34 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/css.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Orders backup</h6>
                    <span class="fs-14">03 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/pdf.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Avionica Tech.</h6>
                    <span class="fs-14">04 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/html.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">9 Degree CRUD.</h6>
                    <span class="fs-14">10 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/ppt.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">User CRUD Styles</h6>
                    <span class="fs-14">78 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-3 col-md-4 col-sm-6">
              <div class="card">
                <div class="card-body px-4 py-3 d-flex align-items-center gap-3">
                  <div>
                    <img src="../../assets/images/files/mp3.png" width="35" alt="" />
                  </div>
                  <div class="clearfix">
                    <h6 class="mb-0">Craft Logo</h6>
                    <span class="fs-14">65 days ago</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="project-grid-pane" role="tabpanel" aria-labelledby="project-grid-tab" tabindex="0">
          <div class="row">
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/folder.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">CRUD Invoices</h5>
                    <span class="fs-14">7 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/folder.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Tower Hill Docs</h5>
                    <span class="fs-14">3 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/folder.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Mivy App</h5>
                    <span class="fs-14">25 files</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/folder.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Leaf CRM API Co..</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/csv.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Tower Hill bilboa..</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/css.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Orders backup</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/pdf.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Avionica Tech Req..</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/html.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">9 Degree CRUD Req..</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/ppt.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">User CRUD Styles</h5>
                    <span class="fs-14">2 days ago</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-2 col-lg-4 col-sm-6">
              <div class="card">
                <div class="card-body text-center p-4 d-flex flex-column justify-content-between">
                  <div class="m-auto pb-3">
                    <img src="../../assets/images/files/mp3.png" alt="" />
                  </div>
                  <div class="clearfix">
                    <h5 class="mb-0">Craft Logo</h5>
                    <span class="fs-14">2 days ago</span>
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
