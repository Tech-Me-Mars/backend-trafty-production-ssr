<script lang="ts" setup>
import Profile from "~/components/profile/Profile.vue";
import PageTitle from "~/lib/PageTitle.vue";
</script>

<template>
  <PageTitle name="Followers" title="Dashboard" />
  <div class="container-fluid">
    <Profile title="Followers" />
    <div class="tab-content" id="tabContentMyProfileBottom">
      <div class="row">
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <img src="../../assets/images/avatar/6.jpg" alt="" class="rounded-circle avatar avatar-lg" />
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Lawrence</a>
                </h4>
                <p class="mb-0 fs-15">Art Director at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <div class="avatar avatar-lg bg-info-light text-info rounded-circle mx-auto d-flex align-items-center justify-content-center">S</div>
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Sean Bean</a>
                </h4>
                <p class="mb-0 fs-15">Art Director at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded-circle avatar avatar-lg" />
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Alan Johnson</a>
                </h4>
                <p class="mb-0 fs-15">Art Director at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <div class="avatar avatar-lg bg-purple-light text-purple rounded-circle mx-auto d-flex align-items-center justify-content-center">P</div>
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Peter Marcus</a>
                </h4>
                <p class="mb-0 fs-15">Art Director at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <img src="../../assets/images/avatar/6.jpg" alt="" class="rounded-circle avatar avatar-lg" />
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Harvey</a>
                </h4>
                <p class="mb-0 fs-15">Web Designer at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <img src="../../assets/images/avatar/5.jpg" alt="" class="rounded-circle avatar avatar-lg" />
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Johnson</a>
                </h4>
                <p class="mb-0 fs-15">PHP Developer at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <div class="avatar avatar-lg bg-warning-light text-warning rounded-circle mx-auto d-flex align-items-center justify-content-center">A</div>
                <span class="fa fa-circle bored border-light text-success position-absolute bottom-0 end-0 mb-0 me-1 fs-12"></span>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">Marshall</a>
                </h4>
                <p class="mb-0 fs-15">React Developer at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
        <div class="col-xl-3 col-sm-6">
          <div class="card">
            <div class="card-body text-center p-4">
              <div class="mx-auto d-inline-block position-relative mb-3">
                <div class="avatar avatar-lg bg-success-light text-success rounded-circle mx-auto d-flex align-items-center justify-content-center">N</div>
              </div>
              <div class="media-body mb-4">
                <h4 class="mb-0">
                  <a href="javascript:void(0);" class="text-black">McDonald</a>
                </h4>
                <p class="mb-0 fs-15">React Native Developer at DexignZone.</p>
              </div>
              <div class="d-flex justify-content-center px-3">
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$12,500.00</h6>
                  <span class="fs-13">Avg. Deal</span>
                </div>
                <div class="bg-light rounded px-3 py-2 text-start mx-2 flex-grow-1">
                  <h6 class="fs-14 mb-0">$150,500.00</h6>
                  <span class="fs-13">Deals</span>
                </div>
              </div>
              <button type="button" class="btn btn-sm btn-light text-black btn-follow me-1 mt-4"><i class="la la-user me-1 fs-14"></i>Follow</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
