<template>
  <CommonNavbar page="Bootstrap" path="Bootstrap Table" />
  <div class="container-fluid">
    <div class="element-area">
      <div class="demo-view">
        <div class="container-fluid pt-0 ps-0 pe-lg-4 pe-0">
          <div class="row">
            <!-- Column starts -->
            <div class="col-xl-12">
              <div class="card dz-card" id="bootstrap-table1">
                <div class="card-header flex-wrap border-0">
                  <div>
                    <h4 class="card-title">Recent Payments Queue</h4>
                    <p class="m-0 subtitle">Recent Payments Queue. Add <code>table boootrstap</code> class in root</p>
                  </div>
                  <ul class="nav nav-tabs dzm-tabs" id="myTab" role="tablist">
                    <li class="nav-item" role="presentation">
                      <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#Preview" type="button" role="tab" aria-selected="true">Preview</button>
                    </li>
                    <li class="nav-item" role="presentation">
                      <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#html" type="button" role="tab" aria-controls="html" aria-selected="false" tabindex="-1">
                        Vue
                      </button>
                    </li>
                  </ul>
                </div>
                <!--tab-content-->
                <div class="tab-content" id="myTabContent">
                  <div class="tab-pane fade active show" id="Preview" role="tabpanel" aria-labelledby="home-tab">
                    <div class="card-body pt-0">
                      <div class="table-responsive">
                        <table class="table table-responsive-md">
                          <thead>
                            <tr>
                              <th style="width: 80px"><strong>#</strong></th>
                              <th><strong>PATIENT</strong></th>
                              <th><strong>DR NAME</strong></th>
                              <th><strong>DATE</strong></th>
                              <th><strong>STATUS</strong></th>
                              <th><strong>PRICE</strong></th>
                              <th></th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td><strong>01</strong></td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td><span class="badge light badge-success">Successful</span></td>
                              <td>$21.56</td>
                              <td>
                                <div class="dropdown">
                                  <button type="button" class="btn btn-success light sharp" data-bs-toggle="dropdown">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                      </g>
                                    </svg>
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td><strong>02</strong></td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td><span class="badge light badge-danger">Canceled</span></td>
                              <td>$21.56</td>
                              <td>
                                <div class="dropdown">
                                  <button type="button" class="btn btn-danger light sharp" data-bs-toggle="dropdown">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                      </g>
                                    </svg>
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td><strong>03</strong></td>
                              <td>Mr. Bobby</td>
                              <td>Dr. Jackson</td>
                              <td>01 August 2020</td>
                              <td><span class="badge light badge-warning">Pending</span></td>
                              <td>$21.56</td>
                              <td>
                                <div class="dropdown">
                                  <button type="button" class="btn btn-warning light sharp" data-bs-toggle="dropdown">
                                    <svg width="20px" height="20px" viewBox="0 0 24 24" version="1.1">
                                      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                        <rect x="0" y="0" width="24" height="24"></rect>
                                        <circle fill="#000000" cx="5" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="12" cy="12" r="2"></circle>
                                        <circle fill="#000000" cx="19" cy="12" r="2"></circle>
                                      </g>
                                    </svg>
                                  </button>
                                  <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Edit</a>
                                    <a class="dropdown-item" href="#">Delete</a>
                                  </div>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                    <!-- /Recent Payments Queue -->
                  </div>
                  <div class="tab-pane fade" id="html" role="tabpanel" aria-labelledby="home-tab">
                    <div class="card-body pt-0 p-0 code-area">
                      <pre class="mb-0"><code class="language-html hljs language-xml">
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-responsive-md"</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:80px;"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>PATIENT<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>DR NAME<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>DATE<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>STATUS<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>PRICE<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>01<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mr. Bobby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge light badge-success"</span>&gt;</span>Successful<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-success light sharp"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span> <span class="hljs-attr">version</span>=<span class="hljs-string">"1.1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">g</span> <span class="hljs-attr">stroke</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">fill-rule</span>=<span class="hljs-string">"evenodd"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">y</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"5"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"19"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">g</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-menu"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>02<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mr. Bobby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge light badge-danger"</span>&gt;</span>Canceled<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger light sharp"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span> <span class="hljs-attr">version</span>=<span class="hljs-string">"1.1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">g</span> <span class="hljs-attr">stroke</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">fill-rule</span>=<span class="hljs-string">"evenodd"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">y</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"5"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"19"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">g</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-menu"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>03<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mr. Bobby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge light badge-warning"</span>&gt;</span>Pending<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"button"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-warning light sharp"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"dropdown"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">svg</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"20px"</span> <span class="hljs-attr">viewBox</span>=<span class="hljs-string">"0 0 24 24"</span> <span class="hljs-attr">version</span>=<span class="hljs-string">"1.1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">g</span> <span class="hljs-attr">stroke</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">stroke-width</span>=<span class="hljs-string">"1"</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"none"</span> <span class="hljs-attr">fill-rule</span>=<span class="hljs-string">"evenodd"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">rect</span> <span class="hljs-attr">x</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">y</span>=<span class="hljs-string">"0"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">height</span>=<span class="hljs-string">"24"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"5"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">circle</span> <span class="hljs-attr">fill</span>=<span class="hljs-string">"#000000"</span> <span class="hljs-attr">cx</span>=<span class="hljs-string">"19"</span> <span class="hljs-attr">cy</span>=<span class="hljs-string">"12"</span> <span class="hljs-attr">r</span>=<span class="hljs-string">"2"</span>/&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">g</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">svg</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>
							<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-menu"</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Edit<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
								<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"dropdown-item"</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span>&gt;</span>Delete<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
							<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                    </div>
                    <!-- /Default accordion -->
                  </div>
                </div>
                <!--/tab-content-->
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table2">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Exam Toppers</h4>
                  <p class="m-0 subtitle">Exam Toppers. Add class <code>exam</code> with the class <code> bootstrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-1" data-bs-toggle="tab" data-bs-target="#bordered" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-1" data-bs-toggle="tab" data-bs-target="#bordered-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>

              <!-- tab-content -->
              <div class="tab-content" id="myTabContent-1">
                <div class="tab-pane fade show active" id="bordered" role="tabpanel" aria-labelledby="home-tab-1">
                  <div class="card-body">
                    <div class="table-responsive">
                      <table class="table table-responsive-md">
                        <thead>
                          <tr>
                            <th style="width: 50px">
                              <div class="form-check custom-checkbox checkbox-success check-lg me-3">
                                <input type="checkbox" class="form-check-input" id="checkAll" required />
                                <label class="form-check-label" for="checkAll"></label>
                              </div>
                            </th>
                            <th><strong>ROLL NO.</strong></th>
                            <th><strong>NAME</strong></th>
                            <th><strong>Email</strong></th>
                            <th><strong>Date</strong></th>
                            <th><strong>Status</strong></th>
                            <th><strong></strong></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <div class="form-check custom-checkbox checkbox-success check-lg me-3">
                                <input type="checkbox" class="form-check-input" id="customCheckBox2" required />
                                <label class="form-check-label" for="customCheckBox2"></label>
                              </div>
                            </td>
                            <td><strong>542</strong></td>
                            <td>
                              <div class="d-flex align-items-center">
                                <img src="../../assets/images/avatar/1.jpg" class="rounded-lg me-2" width="24" alt="" />
                                <span class="w-space-no">Dr. Jackson</span>
                              </div>
                            </td>
                            <td>example@example.com</td>
                            <td>01 August 2020</td>
                            <td>
                              <div class="d-flex align-items-center"><i class="fa fa-circle text-success me-1"></i> Successful</div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fa fa-pencil"></i></a>
                                <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check custom-checkbox checkbox-success check-lg me-3">
                                <input type="checkbox" class="form-check-input" id="customCheckBox3" required />
                                <label class="form-check-label" for="customCheckBox3"></label>
                              </div>
                            </td>
                            <td><strong>542</strong></td>
                            <td>
                              <div class="d-flex align-items-center">
                                <img src="../../assets/images/avatar/2.jpg" class="rounded-lg me-2" width="24" alt="" /> <span class="w-space-no">Dr. Jackson</span>
                              </div>
                            </td>
                            <td>example@example.com</td>
                            <td>01 August 2020</td>
                            <td>
                              <div class="d-flex align-items-center"><i class="fa fa-circle text-danger me-1"></i> Canceled</div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fa fa-pencil"></i></a>
                                <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                              </div>
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <div class="form-check custom-checkbox checkbox-success check-lg me-3">
                                <input type="checkbox" class="form-check-input" id="customCheckBox4" required />
                                <label class="form-check-label" for="customCheckBox4"></label>
                              </div>
                            </td>
                            <td><strong>542</strong></td>
                            <td>
                              <div class="d-flex align-items-center">
                                <img src="../../assets/images/avatar/3.jpg" class="rounded-lg me-2" width="24" alt="" /> <span class="w-space-no">Dr. Jackson</span>
                              </div>
                            </td>
                            <td>example@example.com</td>
                            <td>01 August 2020</td>
                            <td>
                              <div class="d-flex align-items-center"><i class="fa fa-circle text-warning me-1"></i> Pending</div>
                            </td>
                            <td>
                              <div class="d-flex">
                                <a href="#" class="btn btn-primary shadow btn-xs sharp me-1"><i class="fa fa-pencil"></i></a>
                                <a href="#" class="btn btn-danger shadow btn-xs sharp"><i class="fa fa-trash"></i></a>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="bordered-html" role="tabpanel" aria-labelledby="home-tab-1">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-responsive-md"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width:50px;"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check custom-checkbox checkbox-success check-lg me-3"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"checkAll"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"checkAll"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>ROLL NO.<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>NAME<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Email<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check custom-checkbox checkbox-success check-lg me-3"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheckBox2"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheckBox2"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>542<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"images/avatar/1.jpg"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rounded-lg me-2"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"w-space-no"</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>example@example.com	<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-circle text-success me-1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> Successful<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary shadow btn-xs sharp me-1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger shadow btn-xs sharp"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-trash"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check custom-checkbox checkbox-success check-lg me-3"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheckBox3"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheckBox3"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>542<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"images/avatar/2.jpg"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rounded-lg me-2"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"w-space-no"</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>example@example.com	<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-circle text-danger me-1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> Canceled<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary shadow btn-xs sharp me-1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger shadow btn-xs sharp"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-trash"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check custom-checkbox checkbox-success check-lg me-3"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">input</span> <span class="hljs-attr">type</span>=<span class="hljs-string">"checkbox"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-input"</span> <span class="hljs-attr">id</span>=<span class="hljs-string">"customCheckBox4"</span> <span class="hljs-attr">required</span>=<span class="hljs-string">""</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">label</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"form-check-label"</span> <span class="hljs-attr">for</span>=<span class="hljs-string">"customCheckBox4"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">label</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">strong</span>&gt;</span>542<span class="hljs-tag">&lt;/<span class="hljs-name">strong</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">"images/avatar/3.jpg"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"rounded-lg me-2"</span> <span class="hljs-attr">width</span>=<span class="hljs-string">"24"</span> <span class="hljs-attr">alt</span>=<span class="hljs-string">""</span>&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"w-space-no"</span>&gt;</span>Dr. Jackson<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>example@example.com	<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>01 August 2020<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex align-items-center"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-circle text-warning me-1"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> Pending<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"d-flex"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-primary shadow btn-xs sharp me-1"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"#"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"btn btn-danger shadow btn-xs sharp"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-trash"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

	</code></pre>
                  </div>
                </div>
              </div>
              <!-- /tab-content -->
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table3">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Basic</h4>
                  <p class="m-0 subtitle">Add <code>basic</code> class with <code>bootsrtap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-2" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-2" data-bs-toggle="tab" data-bs-target="#withoutSpace" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-2" data-bs-toggle="tab" data-bs-target="#withoutSpace-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>

              <!-- /tab-content -->
              <div class="tab-content" id="myTabContent-2">
                <div class="tab-pane fade show active" id="withoutSpace" role="tabpanel" aria-labelledby="home-tab-2">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-responsive-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Kolor Tea Shirt For Man</td>
                            <td><span class="badge badge-primary light">Sale</span></td>
                            <td>January 22</td>
                            <td class="color-primary">$21.56</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kolor Tea Shirt For Women</td>
                            <td><span class="badge badge-success">Tax</span></td>
                            <td>January 30</td>
                            <td class="color-success">$55.32</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Blue Backpack For Baby</td>
                            <td><span class="badge badge-danger">Extended</span></td>
                            <td>January 25</td>
                            <td class="text-danger">$14.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="withoutSpace-html" role="tabpanel" aria-labelledby="home-tab-2">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-responsive-sm"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Price<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Man<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary light"</span>&gt;</span>Sale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 22<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-primary"</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Women<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Tax<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-success"</span>&gt;</span>$55.32<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Blue Backpack For Baby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>Extended<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>$14.85<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

	</code></pre>
                  </div>
                </div>
              </div>
              <!-- /tab-content -->
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table4">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Table Striped</h4>
                  <p class="m-0 subtitle">Add <code>table striped</code> class with <code>bootsrtap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-3" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-3" data-bs-toggle="tab" data-bs-target="#withoutBorder" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-3" data-bs-toggle="tab" data-bs-target="#withoutBorder-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>

              <!-- /tab-content -->
              <div class="tab-content" id="myTabContent-3">
                <div class="tab-pane fade show active" id="withoutBorder" role="tabpanel" aria-labelledby="home-tab-3">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-striped table-responsive-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Kolor Tea Shirt For Man</td>
                            <td><span class="badge badge-primary">Sale</span></td>
                            <td>January 22</td>
                            <td class="color-primary">$21.56</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kolor Tea Shirt For Women</td>
                            <td><span class="badge badge-success light">Tax</span></td>
                            <td>January 30</td>
                            <td class="color-success">$55.32</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Blue Backpack For Baby</td>
                            <td><span class="badge badge-danger">Extended</span></td>
                            <td>January 25</td>
                            <td class="text-danger">$14.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="withoutBorder-html" role="tabpanel" aria-labelledby="home-tab-3">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-striped table-responsive-sm"</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Price<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Man<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary"</span>&gt;</span>Sale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 22<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-primary"</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Women<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success light"</span>&gt;</span>Tax<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-success"</span>&gt;</span>$55.32<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Blue Backpack For Baby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>Extended<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>$14.85<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
              <!-- /tab-content -->
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table5">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Table Bordered</h4>
                  <p class="m-0 subtitle">Add <code>table bordered</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-4" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-4" data-bs-toggle="tab" data-bs-target="#leftPosition" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-4" data-bs-toggle="tab" data-bs-target="#leftPosition-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <!-- tab-content -->
              <div class="tab-content" id="myTabContent-4">
                <div class="tab-pane fade show active" id="leftPosition" role="tabpanel" aria-labelledby="home-tab-4">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordered table-responsive-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Kolor Tea Shirt For Man</td>
                            <td><span class="badge badge-primary">Sale</span></td>
                            <td>January 22</td>
                            <td class="color-primary">$21.56</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kolor Tea Shirt For Women</td>
                            <td><span class="badge badge-success">Tax</span></td>
                            <td>January 30</td>
                            <td class="color-success">$55.32</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Blue Backpack For Baby</td>
                            <td><span class="badge badge-danger">Extended</span></td>
                            <td>January 25</td>
                            <td class="text-danger">$14.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="leftPosition-html" role="tabpanel" aria-labelledby="home-tab-4">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-bordered table-responsive-sm"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Price<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Man<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary"</span>&gt;</span>Sale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 22<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-primary"</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Women<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Tax<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-success"</span>&gt;</span>$55.32<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Blue Backpack For Baby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>Extended<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>$14.85<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
									</code></pre>
                  </div>
                </div>
              </div>
              <!-- /tab-content -->
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table6">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Table Hover</h4>
                  <p class="m-0 subtitle">Add <code>table hover</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-115" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-115" data-bs-toggle="tab" data-bs-target="#leftPosition1" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-115" data-bs-toggle="tab" data-bs-target="#leftPosition-html1" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <!-- tab-content -->
              <div class="tab-content" id="myTabContent-115">
                <div class="tab-pane fade show active" id="leftPosition1" role="tabpanel" aria-labelledby="home-tab-115">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-hover table-responsive-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Kolor Tea Shirt For Man</td>
                            <td><span class="badge badge-primary light">Sale</span></td>
                            <td>January 22</td>
                            <td class="color-primary">$21.56</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kolor Tea Shirt For Women</td>
                            <td><span class="badge badge-success">Tax</span></td>
                            <td>January 30</td>
                            <td class="color-success">$55.32</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Blue Backpack For Baby</td>
                            <td><span class="badge badge-danger light">Extended</span></td>
                            <td>January 25</td>
                            <td class="text-danger">$14.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div class="tab-pane fade" id="leftPosition-html1" role="tabpanel" aria-labelledby="home-tab-115">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-hover table-responsive-sm"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Price<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Man<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary light"</span>&gt;</span>Sale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 22<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-primary"</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Women<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Tax<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-success"</span>&gt;</span>$55.32<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Blue Backpack For Baby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger light"</span>&gt;</span>Extended<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>$14.85<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>

									</code></pre>
                  </div>
                </div>
              </div>
              <!-- /tab-content -->
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->

          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table7">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Hover Table</h4>
                  <p class="m-0 subtitle">Add <code>hover table</code> class with <code>bootsrtap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-14" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-14" data-bs-toggle="tab" data-bs-target="#widthicon" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-14" data-bs-toggle="tab" data-bs-target="#widthicon-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-14">
                <div class="tab-pane fade show active" id="widthicon" role="tabpanel" aria-labelledby="home-tab-14">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table header-border table-hover verticle-middle">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Product</th>
                            <th scope="col">Popularity</th>
                            <th scope="col">Sales</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Air Conditioner</td>
                            <td>
                              <div class="progress" style="background: rgba(127, 99, 244, 0.1)">
                                <div class="progress-bar" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td><span class="badge badge-primary light">70%</span></td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Textiles</td>
                            <td>
                              <div class="progress" style="background: rgba(76, 175, 80, 0.1)">
                                <div class="progress-bar bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td><span class="badge badge-success">70%</span></td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Milk Powder</td>
                            <td>
                              <div class="progress" style="background: rgba(70, 74, 83, 0.1)">
                                <div class="progress-bar bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td><span class="badge badge-dark light">70%</span></td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>Vehicles</td>
                            <td>
                              <div class="progress" style="background: rgba(255, 87, 34, 0.1)">
                                <div class="progress-bar bg-danger" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td><span class="badge badge-danger">70%</span></td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Boats</td>
                            <td>
                              <div class="progress" style="background: rgba(255, 193, 7, 0.1)">
                                <div class="progress-bar bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td><span class="badge badge-warning">70%</span></td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="widthicon-html" role="tabpanel" aria-labelledby="home-tab-5">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table header-border table-hover verticle-middle"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Product<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Popularity<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Sales<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Air Conditioner<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(127, 99, 244, .1)"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary light"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Textiles<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(76, 175, 80, .1)"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-success"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Milk Powder<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(70, 74, 83, .1)"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-dark"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-dark light"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Vehicles<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(255, 87, 34, .1)"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-danger"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Boats<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(255, 193, 7, .1)"</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-warning"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-warning"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table8">
              <div class="card-header flex-wrap d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Table Bordered</h4>
                  <p class="m-0 subtitle">Add <code>table bordered</code> class with <code>bootsrtap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-5" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-5" data-bs-toggle="tab" data-bs-target="#widthicon-1" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-5" data-bs-toggle="tab" data-bs-target="#widthicon-html-1" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-5">
                <div class="tab-pane fade show active" id="widthicon-1" role="tabpanel" aria-labelledby="home-tab-5">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordered table-responsive-sm">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Date</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Kolor Tea Shirt For Man</td>
                            <td><span class="badge badge-primary">Sale</span></td>
                            <td>January 22</td>
                            <td class="color-primary">$21.56</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Kolor Tea Shirt For Women</td>
                            <td><span class="badge badge-success">Tax</span></td>
                            <td>January 30</td>
                            <td class="color-success">$55.32</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Blue Backpack For Baby</td>
                            <td><span class="badge badge-danger">Extended</span></td>
                            <td>January 25</td>
                            <td class="text-danger">$14.85</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="widthicon-html-1" role="tabpanel" aria-labelledby="home-tab-5">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-bordered table-responsive-sm"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Name<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Price<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Man<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary"</span>&gt;</span>Sale<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 22<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-primary"</span>&gt;</span>$21.56<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Kolor Tea Shirt For Women<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Tax<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"color-success"</span>&gt;</span>$55.32<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Blue Backpack For Baby<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>Extended<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>January 25<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-danger"</span>&gt;</span>$14.85<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>	

</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table9">
              <div class="card-header flex-wrap d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Bordered Table</h4>
                  <p class="m-0 subtitle">Add <code>bordered table</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-6" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-6" data-bs-toggle="tab" data-bs-target="#headerbackground" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-6" data-bs-toggle="tab" data-bs-target="#headerbackground-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-6">
                <div class="tab-pane fade show active" id="headerbackground" role="tabpanel" aria-labelledby="home-tab-6">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordered verticle-middle table-responsive-sm">
                        <thead>
                          <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Label</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Air Conditioner</td>
                            <td>
                              <div class="progress" style="background: rgba(127, 99, 244, 0.1)">
                                <div class="progress-bar bg-primary" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>Apr 20,2018</td>
                            <td><span class="badge badge-primary light">70%</span></td>
                            <td>
                              <span>
                                <a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a>
                                <a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a>
                              </span>
                            </td>
                          </tr>
                          <tr>
                            <td>Textiles</td>
                            <td>
                              <div class="progress" style="background: rgba(76, 175, 80, 0.1)">
                                <div class="progress-bar bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>May 27,2018</td>
                            <td><span class="badge badge-success">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Milk Powder</td>
                            <td>
                              <div class="progress" style="background: rgba(70, 74, 83, 0.1)">
                                <div class="progress-bar bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>May 18,2018</td>
                            <td><span class="badge badge-dark light">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Vehicles</td>
                            <td>
                              <div class="progress" style="background: rgba(255, 87, 34, 0.1)">
                                <div class="progress-bar bg-danger" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>Mar 27,2018</td>
                            <td><span class="badge badge-danger">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Boats</td>
                            <td>
                              <div class="progress" style="background: rgba(255, 193, 7, 0.1)">
                                <div class="progress-bar bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>Jun 28,2018</td>
                            <td><span class="badge badge-warning">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="headerbackground-html" role="tabpanel" aria-labelledby="home-tab-6">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-bordered verticle-middle table-responsive-sm"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Task<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Progress<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Deadline<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Label<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Air Conditioner<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(127, 99, 244, .1)"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-primary"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Apr 20,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary light"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Textiles<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(76, 175, 80, .1)"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-success"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>May 27,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
							<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Milk Powder<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(70, 74, 83, .1)"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-dark"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>May 18,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-dark light"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
							<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Vehicles<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(255, 87, 34, .1)"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-danger"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mar 27,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
							<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Boats<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
					<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(255, 193, 7, .1)"</span>&gt;</span>
						<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-warning"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
						<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
					<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jun 28,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-warning"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
							<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
							<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
								<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
				<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table10">
              <div class="card-header flex-wrap d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Table Stripped</h4>
                  <p class="m-0 subtitle">Add class <code>table stripeed</code> with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-7" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-7" data-bs-toggle="tab" data-bs-target="#solidbackground" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-7" data-bs-toggle="tab" data-bs-target="#solidbackground-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-7">
                <div class="tab-pane fade show active" id="solidbackground" role="tabpanel" aria-labelledby="home-tab-7">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table table-bordered table-striped verticle-middle table-responsive-sm">
                        <thead>
                          <tr>
                            <th scope="col">Task</th>
                            <th scope="col">Progress</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Label</th>
                            <th scope="col">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Air Conditioner</td>
                            <td>
                              <div class="progress" style="background: rgba(127, 99, 244, 0.1)">
                                <div class="progress-bar bg-primary" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>Apr 20,2018</td>
                            <td><span class="badge badge-primary">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Textiles</td>
                            <td>
                              <div class="progress" style="background: rgba(76, 175, 80, 0.1)">
                                <div class="progress-bar bg-success" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>May 27,2018</td>
                            <td><span class="badge badge-success">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Milk Powder</td>
                            <td>
                              <div class="progress" style="background: rgba(70, 74, 83, 0.1)">
                                <div class="progress-bar bg-dark" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>May 18,2018</td>
                            <td><span class="badge badge-dark">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                          <tr>
                            <td>Boats</td>
                            <td>
                              <div class="progress" style="background: rgba(255, 193, 7, 0.1)">
                                <div class="progress-bar bg-warning" style="width: 70%" role="progressbar"><span class="sr-only">70% Complete</span></div>
                              </div>
                            </td>
                            <td>Jun 28,2018</td>
                            <td><span class="badge badge-warning">70%</span></td>
                            <td>
                              <span
                                ><a href="javascript:void(0);" class="me-4" data-bs-toggle="tooltip" data-placement="top" title="Edit"><i class="fa fa-pencil color-muted"></i> </a
                                ><a href="javascript:void(0);" data-bs-toggle="tooltip" data-placement="top" title="btn-close"><i class="fa-solid fa-xmark text-danger"></i></a
                              ></span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="solidbackground-html" role="tabpanel" aria-labelledby="home-tab-7">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
											<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table table-bordered table-striped verticle-middle table-responsive-sm"</span>&gt;</span>
												<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
													<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Task<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Progress<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Deadline<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Label<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Action<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
													<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
												<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
												<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
													<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Air Conditioner<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
															<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(127, 99, 244, .1)"</span>&gt;</span>
																<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-primary"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
																<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
															<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Apr 20,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-primary"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
																	<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
													<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
													<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Textiles<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
															<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(76, 175, 80, .1)"</span>&gt;</span>
																<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-success"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
																<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
															<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>May 27,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
																	<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
													<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
													<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Milk Powder<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
															<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(70, 74, 83, .1)"</span>&gt;</span>
																<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-dark"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
																<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
															<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>May 18,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-dark"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
																	<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
													<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
													<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Boats<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>
															<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"background: rgba(255, 193, 7, .1)"</span>&gt;</span>
																<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"progress-bar bg-warning"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"width: 70%;"</span> <span class="hljs-attr">role</span>=<span class="hljs-string">"progressbar"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"sr-only"</span>&gt;</span>70% Complete<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
																<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
															<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jun 28,2018<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-warning"</span>&gt;</span>70%<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
														<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"me-4"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"Edit"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa fa-pencil color-muted"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span> <span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span>
																	<span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void(0);"</span> <span class="hljs-attr">data-bs-toggle</span>=<span class="hljs-string">"tooltip"</span>
																	<span class="hljs-attr">data-placement</span>=<span class="hljs-string">"top"</span> <span class="hljs-attr">title</span>=<span class="hljs-string">"btn-close"</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">i</span>
																		<span class="hljs-attr">class</span>=<span class="hljs-string">"fa-solid fa-xmark text-danger"</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">i</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span><span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
														<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
													<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
												<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
											<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
										<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table11">
              <div class="card-header flex-wrap d-flex justify-content-between">
                <div>
                  <h4 class="card-title">Responsive Table</h4>
                  <p class="m-0 subtitle">Add class <code>responsive table</code> with <code>bootstrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-8" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-8" data-bs-toggle="tab" data-bs-target="#activebackground" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-8" data-bs-toggle="tab" data-bs-target="#activebackground-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-8">
                <div class="tab-pane fade show active" id="activebackground" role="tabpanel" aria-labelledby="home-tab-8">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table header-border table-responsive-sm">
                        <thead>
                          <tr>
                            <th>Invoice</th>
                            <th>User</th>
                            <th>Date</th>
                            <th>Amount</th>
                            <th>Status</th>
                            <th>Country</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td><a href="javascript:void();">Order #26589</a></td>
                            <td>Herman Beck</td>
                            <td><span class="text-muted">Oct 16, 2017</span></td>
                            <td>$45.00</td>
                            <td><span class="badge badge-success">Paid</span></td>
                            <td>EN</td>
                          </tr>
                          <tr>
                            <td><a href="javascript:void();">Order #58746</a></td>
                            <td>Mary Adams</td>
                            <td><span class="text-muted">Oct 12, 2017</span></td>
                            <td>$245.30</td>
                            <td><span class="badge badge-info light">Shipped</span></td>
                            <td>CN</td>
                          </tr>
                          <tr>
                            <td><a href="javascript:void();">Order #98458</a></td>
                            <td>Caleb Richards</td>
                            <td><span class="text-muted">May 18, 2017</span></td>
                            <td>$38.00</td>
                            <td><span class="badge badge-danger">Shipped</span></td>
                            <td>AU</td>
                          </tr>
                          <tr>
                            <td><a href="javascript:void();">Order #32658</a></td>
                            <td>June Lane</td>
                            <td><span class="text-muted">Apr 28, 2017</span></td>
                            <td>$77.99</td>
                            <td><span class="badge badge-success">Paid</span></td>
                            <td>FR</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="activebackground-html" role="tabpanel" aria-labelledby="home-tab-8">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table header-border table-responsive-sm"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Invoice<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>User<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Date<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Amount<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Status<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Country<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void();"</span>&gt;</span>Order #26589<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Herman Beck<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>Oct 16, 2017<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$45.00<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Paid<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>EN<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void();"</span>&gt;</span>Order #58746<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mary Adams<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>Oct 12, 2017<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$245.30<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-info light"</span>&gt;</span>Shipped<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>CN<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void();"</span>&gt;</span>Order #98458<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Caleb Richards<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>May 18, 2017<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$38.00<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-danger"</span>&gt;</span>Shipped<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>AU<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">a</span> <span class="hljs-attr">href</span>=<span class="hljs-string">"javascript:void();"</span>&gt;</span>Order #32658<span class="hljs-tag">&lt;/<span class="hljs-name">a</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>June Lane<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"text-muted"</span>&gt;</span>Apr 28, 2017<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>$77.99<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span><span class="hljs-tag">&lt;<span class="hljs-name">span</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"badge badge-success"</span>&gt;</span>Paid<span class="hljs-tag">&lt;/<span class="hljs-name">span</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>FR<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>	
										</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table12">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Heading With Background</h4>
                  <p class="m-0 subtitle">Add <code>heading with background</code> and <code>heading</code> class with <code>bootsrtap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-9" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-9" data-bs-toggle="tab" data-bs-target="#headerShadow" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-9" data-bs-toggle="tab" data-bs-target="#headerShadow-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>

              <div class="tab-content" id="myTabContent-9">
                <div class="tab-pane fade show active" id="headerShadow" role="tabpanel" aria-labelledby="home-tab-9">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table">
                        <thead class="thead-info">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="headerShadow-html" role="tabpanel" aria-labelledby="home-tab-9">
                  <div class="card-body pt-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">

<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">thead</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"thead-info"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Last<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Handle<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mark<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Otto<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@mdo<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jacob<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Thornton<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@fat<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table13">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Primary Table</h4>
                  <p class="m-0 subtitle">Add <code>primary table</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-10" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-10" data-bs-toggle="tab" data-bs-target="#roundedStylish" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-10" data-bs-toggle="tab" data-bs-target="#roundedStylish-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-10">
                <div class="tab-pane fade show active" id="roundedStylish" role="tabpanel" aria-labelledby="home-tab-10">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table primary-table-bordered">
                        <thead class="thead-primary">
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="roundedStylish-html" role="tabpanel" aria-labelledby="home-tab-10">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table primary-table-bordered"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"thead-primary"</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Last<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Handle<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mark<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Otto<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@mdo<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jacob<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Thornton<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@fat<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
          <!-- Column starts -->
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table14">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Primary Table Hover</h4>
                  <p class="m-0 subtitle">Add <code>primary table hover</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-11" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-11" data-bs-toggle="tab" data-bs-target="#gradient" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-11" data-bs-toggle="tab" data-bs-target="#gradient-html" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-11">
                <div class="tab-pane fade show active" id="gradient" role="tabpanel" aria-labelledby="home-tab-11">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table primary-table-bg-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th>1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                          </tr>
                          <tr>
                            <th>2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                          </tr>
                          <tr>
                            <th>3</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th>4</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                          <tr>
                            <th>5</th>
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="gradient-html" role="tabpanel" aria-labelledby="home-tab-11">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
	<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table primary-table-bg-hover"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>First<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Last<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span> <span class="hljs-attr">scope</span>=<span class="hljs-string">"col"</span>&gt;</span>Handle<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Mark<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Otto<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@mdo<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Jacob<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Thornton<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@fat<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Larry<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>the Bird<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>@twitter<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span>
</code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-xl-12">
            <div class="card dz-card" id="bootstrap-table15">
              <div class="card-header flex-wrap d-flex justify-content-between border-0">
                <div>
                  <h4 class="card-title">Contextual Table</h4>
                  <p class="m-0 subtitle">Add <code>contextual table</code> class with <code>bootsrap-table</code></p>
                </div>
                <ul class="nav nav-tabs dzm-tabs" id="myTab-12" role="tablist">
                  <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="home-tab-12" data-bs-toggle="tab" data-bs-target="#gradient1" type="button" role="tab" aria-selected="true">Preview</button>
                  </li>
                  <li class="nav-item" role="presentation">
                    <button class="nav-link" id="profile-tab-12" data-bs-toggle="tab" data-bs-target="#gradient-html1" type="button" role="tab" aria-selected="false" tabindex="-1">Vue</button>
                  </li>
                </ul>
              </div>
              <div class="tab-content" id="myTabContent-12">
                <div class="tab-pane fade show active" id="gradient1" role="tabpanel" aria-labelledby="home-tab-12">
                  <div class="card-body pt-0">
                    <div class="table-responsive">
                      <table class="table header-border" style="min-width: 500px">
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                            <th>Column heading</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr class="table-active">
                            <td>1</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="table-primary">
                            <td>1</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="table-success">
                            <td>2</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="table-info">
                            <td>3</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="table-warning">
                            <td>4</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                          <tr class="table-danger">
                            <td>5</td>
                            <td>Column content</td>
                            <td>Column content</td>
                            <td>Column content</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                <div class="tab-pane fade" id="gradient-html1" role="tabpanel" aria-labelledby="home-tab-12">
                  <div class="card-body pt-0 p-0 code-area">
                    <pre class="mb-0"><code class="language-html hljs language-xml">
<span class="hljs-tag">&lt;<span class="hljs-name">div</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-responsive"</span>&gt;</span>
	<span class="hljs-tag">&lt;<span class="hljs-name">table</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table header-border"</span> <span class="hljs-attr">style</span>=<span class="hljs-string">"min-width: 500px;"</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">thead</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>#<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Column heading<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Column heading<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">th</span>&gt;</span>Column heading<span class="hljs-tag">&lt;/<span class="hljs-name">th</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">thead</span>&gt;</span>
		<span class="hljs-tag">&lt;<span class="hljs-name">tbody</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-active"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-primary"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>1<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-success"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>2<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-info"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>3<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-warning"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>4<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
			<span class="hljs-tag">&lt;<span class="hljs-name">tr</span> <span class="hljs-attr">class</span>=<span class="hljs-string">"table-danger"</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>5<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
				<span class="hljs-tag">&lt;<span class="hljs-name">td</span>&gt;</span>Column content<span class="hljs-tag">&lt;/<span class="hljs-name">td</span>&gt;</span>
			<span class="hljs-tag">&lt;/<span class="hljs-name">tr</span>&gt;</span>
		<span class="hljs-tag">&lt;/<span class="hljs-name">tbody</span>&gt;</span>
	<span class="hljs-tag">&lt;/<span class="hljs-name">table</span>&gt;</span>
<span class="hljs-tag">&lt;/<span class="hljs-name">div</span>&gt;</span></code></pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Column ends -->
        </div>
      </div>

      <div class="demo-right">
        <div class="demo-right-inner" id="right-sidebar">
          <h4 class="title">Bootstrap Table</h4>
          <div class="dz-scroll demo-right-tabs" id="rightSidebarScroll">
            <ul class="navbar-nav nav" id="menu-bar">
              <li><a href="#bootstrap-table1" class="scroll">Recent Payments Queue</a></li>
              <li><a href="#bootstrap-table2" class="scroll">Exam Toppers</a></li>
              <li><a href="#bootstrap-table3" class="scroll">Basic</a></li>
              <li><a href="#bootstrap-table4" class="scroll">Table Striped</a></li>
              <li><a href="#bootstrap-table5" class="scroll">Table Bordered</a></li>
              <li><a href="#bootstrap-table6" class="scroll">Table Hover</a></li>
              <li><a href="#bootstrap-table7" class="scroll">Hover Table</a></li>
              <li><a href="#bootstrap-table8" class="scroll">Table Bordered</a></li>
              <li><a href="#bootstrap-table9" class="scroll">Bordered Table</a></li>
              <li><a href="#bootstrap-table10" class="scroll">Table Stripped</a></li>
              <li><a href="#bootstrap-table11" class="scroll">Responsive Table</a></li>
              <li><a href="#bootstrap-table12" class="scroll">Heading With Background</a></li>
              <li><a href="#bootstrap-table13" class="scroll">Primary Table</a></li>
              <li><a href="#bootstrap-table14" class="scroll">Primary Table Hover</a></li>
              <li><a href="#bootstrap-table15" class="scroll">Contextual Table</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import CommonNavbar from "@/lib/CommonNavbar.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "bootstrap_",
  components: { CommonNavbar },
  setup() {
    const checkBoxes = ref(false);
    return { checkBoxes };
  },
  mounted: function () {
    window.addEventListener("scroll", this.setScrollVal);
  },
  methods: {
    setScrollVal() {
      let elements = document.querySelectorAll(".dz-card");
      let scroll = document.querySelectorAll(".scroll");

      for (let i = 0; i < elements.length; i++) {
        if (elements[i].getBoundingClientRect().top < 2) {
          scroll[i].parentElement?.classList.add("active");
        } else {
          scroll[i].parentElement?.classList.remove("active");
        }
        if (elements[i].getBoundingClientRect().bottom <= -1) {
          scroll[i].parentElement?.classList.remove("active");
        }
      }
    },
  },
});
</script>

<style scoped></style>
