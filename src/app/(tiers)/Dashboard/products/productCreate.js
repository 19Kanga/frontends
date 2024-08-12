'use client'
import React from 'react'

export default function ProductCreate(){
     const sideDrawerHide =()=>{
        const drawerDivs = document?.querySelectorAll(".drawer");
        const drawerSets = document?.querySelectorAll("[data-drawer]");
        document?.querySelectorAll("#sidebar")?.forEach((closeBtn) => {
            drawerSets?.forEach(drawerBtn => drawerBtn?.classList?.remove("active"));
            drawerDivs?.forEach(drawerDiv => drawerDiv?.classList?.remove("active"));
            document?.querySelector(".backdrop")?.classList?.remove("active");
            document.body.style.overflowY = "auto"
        });
    }
    return(
<div id="sidebar" className="drawer">
    <div className="drawer-header">
      <h3 className="drawer-title">products</h3>
      <button onClick={sideDrawerHide} className="fa-solid fa-xmark close-btn"></button>
    </div>
    <div className="drawer-body">
      <div>
        <div className="form-row">
          <div className="lg:form-col-12 sm:form-col-6">
            <label for="name" className="db-field-title required">Name</label>
            <input
              type="text"
              id="name"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.name">{{ errors.name[0] }}</small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="sku" className="db-field-title required">SKU</label>
            <div className="db-group-field">
              <input
                type="text"
                id="sku"
                className="db-field-control"
              />
              <button type="button" className="lab lab-fill-shuffle"></button>
            </div>
            {/* <small className="db-field-alert" v-if="errors.sku">{{ errors.sku[0] }}</small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="product_category_id" className="db-field-title required">
              Category
            </label>
            <input
                type="text"
                id="sku"
                className="db-field-control"
            />
            {/* <vue-select
              className="db-field-control f-b-custom-select"
              id="product_category_id"
              v-bind:className="errors.product_category_id ? 'invalid' : ''"
              v-model="props.form.product_category_id"
              label-by="option"
              value-by="id"
              :closeOnSelect="true"
              :searchable="true"
              :clearOnClose="true"
              placeholder="--"
              search-placeholder="--"
            /> */}
            {/* <small className="db-field-alert" v-if="errors.product_category_id">
              {{ errors.product_category_id[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="barcode_id" className="db-field-title required">barcode</label>
            <input
                type="text"
                id="sku"
                className="db-field-control"
              />
            {/* <vue-select
              className="db-field-control f-b-custom-select"
              id="barcode_id"
              v-bind:className="errors.barcode_id ? 'invalid' : ''"
              v-model="props.form.barcode_id"
              :options="barcodes"
              label-by="name"
              value-by="id"
              :closeOnSelect="true"
              :searchable="true"
              :clearOnClose="true"
              placeholder="--"
              search-placeholder="--"
            /> */}
            {/* <small className="db-field-alert" v-if="errors.barcode_id">
              {{ errors.barcode_id[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="buying_price" className="db-field-title required">Buying Price</label>
            <input
              type="text"
              id="buying_price"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.buying_price">{{
              errors.buying_price[0]
            }}</small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="selling_price" className="db-field-title required">
              Selling Price
            </label>
            <input
              type="text"
              id="selling_price"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.selling_price">{{
              errors.selling_price[0]
            }}</small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="tax_id" className="db-field-title">Tax</label>
            <input
                type="text"
                id="sku"
                className="db-field-control"
              />
            {/* <vue-select
              ref="tax_id"
              className="db-field-control f-b-custom-select"
              id="tax_id"
              v-bind:className="errors.tax_id ? 'invalid' : ''"
              v-model="props.form.tax_id"
              :options="taxes"
              label-by="name"
              value-by="id"
              :closeOnSelect="true"
              :searchable="true"
              :clearOnClose="true"
              placeholder="--"
              search-placeholder="--"
              :multiple="true"
            /> */}
            {/* <small className="db-field-alert" v-if="errors.tax_id">{{
              errors.tax_id[0]
            }}</small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="product_brand_id" className="db-field-title">Brand</label>
            <input
                type="text"
                id="sku"
                className="db-field-control"
              />
            {/* <vue-select
              className="db-field-control f-b-custom-select"
              id="product_brand_id"
              v-bind:className="errors.product_brand_id ? 'invalid' : ''"
              v-model="props.form.product_brand_id"
              :options="productBrands"
              label-by="name"
              value-by="id"
              :closeOnSelect="true"
              :searchable="true"
              :clearOnClose="true"
              placeholder="--"
              search-placeholder="--"
            /> */}
            {/* <small className="db-field-alert" v-if="errors.product_brand_id">
              {{ errors.product_brand_id[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label className="db-field-title required">Status</label>
            <div className="db-field-radio-group">
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="active"
                    className="custom-radio-field"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="active" className="db-field-label">active</label>
              </div>
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="custom-radio-field"
                    id="inactive"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="inactive" className="db-field-label">Inactive</label>
              </div>
            </div>
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label className="db-field-title required" for="yes">Can Purchasable</label>
            <div className="db-field-radio-group">
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="yes"
                    className="custom-radio-field"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="yes" className="db-field-label">Yes</label>
              </div>
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="custom-radio-field"
                    id="no"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="no" className="db-field-label">No</label>
              </div>
            </div>
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label className="db-field-title required" for="enable">Show Stock out</label>
            <div className="db-field-radio-group">
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="enable"
                    className="custom-radio-field"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="enable" className="db-field-label">Enable</label>
              </div>
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="custom-radio-field"
                    id="disable"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="disable" className="db-field-label">Disable</label>
              </div>
            </div>
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label className="db-field-title required" for="refundableYes">Refundable</label>
            <div className="db-field-radio-group">
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    id="refundableYes"
                    className="custom-radio-field"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="refundableYes" className="db-field-label">Yes</label>
              </div>
              <div className="db-field-radio">
                <div className="custom-radio">
                  <input
                    type="radio"
                    className="custom-radio-field"
                    id="refundableNo"
                  />
                  <span className="custom-radio-span"></span>
                </div>
                <label for="refundableNo" className="db-field-label">No</label>
              </div>
            </div>
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="maximum_purchase_quantity" className="db-field-title required">
                Maximum Purchase Quantity
            </label>
            <input
              type="text"
              id="maximum_purchase_quantity"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.maximum_purchase_quantity">
              {{ errors.maximum_purchase_quantity[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="low_stock_quantity_warning" className="db-field-title required">
                Low Stock Quantity Warning
            </label>
            <input
              type="text"
              id="low_stock_quantity_warning"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.low_stock_quantity_warning">
              {{ errors.low_stock_quantity_warning[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="unit" className="db-field-title required">Unit</label>
            <input
                type="text"
                id="sku"
                className="db-field-control"
              />
            {/* <vue-select
              className="db-field-control f-b-custom-select"
              id="unit_id"
              v-bind:className="errors.unit_id ? 'invalid' : ''"
              v-model="props.form.unit_id"
              :options="units"
              label-by="name_code"
              value-by="id"
              :closeOnSelect="true"
              :searchable="true"
              :clearOnClose="true"
              placeholder="--"
              search-placeholder="--"
            /> */}
            {/* <small className="db-field-alert" v-if="errors.unit_id">
              {{ errors.unit_id[0] }}
            </small> */}
          </div>

          <div className="lg:form-col-12 sm:form-col-6">
            <label for="weight" className="db-field-title">
                Weight
            </label>
            <input
              type="text"
              id="weight"
              className="db-field-control"
            />
            {/* <small className="db-field-alert" v-if="errors.weight">
              {{ errors.weight[0] }}
            </small> */}
          </div>

          <div className="form-col-12">
                    <label for="tags" className="db-field-title">Tags</label>
                            <input
                                type="text"
                                id="sku"
                                className="db-field-control"
                            />
                            {/* <vue-tags-input id="tags" placeholder="" v-model="tag" /> */}
                        {/* <small className="db-field-alert" v-if="errors.tags">{{ errors.tags[0] }}</small> */}
                    </div>
                 

          <div className="form-col-12">
            <label for="description" className="db-field-title">Description</label>
                <textarea className="db-field-control" rows='5' placeholder='description'></textarea>
              {/* <quill-editor
                id="description"
                v-model:value="props.form.description"
                className="!h-40 textarea-border-radius"
              /> */}
            <small className="db-field-alert">
              {/* {{ errors.description[0] }} */}
            </small>
          </div>

          <div className="col-12">
            <div className="flex flex-wrap gap-3 mt-4">
              <button
                type="submit"
                className="db-btn py-2 text-white bg-primary"
              >
                <i className="lab lab-fill-save"></i>
                <span>save</span>
              </button>
              <button type="button" className="modal-btn-outline modal-close">
                <i className="lab lab-fill-close-circle"></i>
                <span>close</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    )
}