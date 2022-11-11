import React from 'react'

const Modal = () => {
    return (
        <div>
            {/* ADDRESS MODAL */}
            <div className="modal fade detailModal" id="genModal-1" tabIndex={-1} aria-labelledby="genModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="genBox modalBox">
                            <div className="topText xy-between pb-2 mb-3 borT pt-3">
                                <p className="title">Addresses</p>
                                <span className="actionBtnRow xy-center">
                                    <a href="edit-address.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                    <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                </span>
                            </div>
                            <div className="modalDetail">
                                <h3 className="heading pb-2">Home</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Status</p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Active</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">State </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Ohio</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">City </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> Newark</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-6">
                                        <ul className="list-unstyled">
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Description </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> -</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Address </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc"> 7000 Chatham Road|</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="infoItem d-flex pb-2">
                                                    <p className="title">Zip Code </p>
                                                    <span className="ps-2 pe-2">:</span>
                                                    <p className="desc">43055</p>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="btnWrap type-2 pt-3 justify-content-end">
                                    <a href="edit-generator.php" className="ctBtn type-2 clr-1">Add Address</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* ADDRESS MODAL */}
            {/* GENERATORS MODAL */}
            <div className="modal fade detailModal" id="genModal-2" tabIndex={-1} aria-labelledby="genModal" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        <div className="genBox modalBox">
                            <div className="topText xy-between pb-2 mb-3 borT pt-3">
                                <p className="title">Generators</p>
                                <span className="actionBtnRow xy-center">
                                    <a href="edit-generator.php" className="actionbtn"><i className="fa-solid fa-pen" /></a>
                                    <a href="#!" className="actionbtn"><i className="fa-solid fa-trash" /></a>
                                </span>
                            </div>
                            <div className="modalDetail">
                                <h3 className="heading pb-2">Home</h3>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="generatorWrap d-flex">
                                            <div className="imgBox me-2">
                                                <img src="assets/images/sample-img.png" alt="img" className="generatorImg" />
                                            </div>
                                            <ul className="list-unstyled">
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Status</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> Active</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Modal No </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> 7177</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Serial No </p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc"> 3005585392</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Manufacturer</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">Generac</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="infoItem d-flex pb-2">
                                                        <p className="title">Generator Type</p>
                                                        <span className="ps-2 pe-2">:</span>
                                                        <p className="desc">Air Cooled</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/*<div class="col-6">
							<ul class="list-unstyled">
								<li>	
									<div class="infoItem d-flex pb-2">
										<p class="title">Description </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc"> -</p>
									</div>
								</li>
								<li>
									<div class="infoItem d-flex pb-2">
										<p class="title">Address </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc"> 7000 Chatham Road|</p>
									</div>
								</li>
								<li>
									<div class="infoItem d-flex pb-2">
										<p class="title">Zip Code </p>
										<span class="ps-2 pe-2">:</span>
										<p class="desc">43055</p>
									</div>
								</li>
							</ul>
						</div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Modal