import React from 'react';
import DefaultLayout from '../layout/DefaultLayout';
import Breadcrumb from '../components/Breadcrumb';

const AddItems = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='AddItems' />

      {/* <!-- ====== AddItems Section Start ====== --> */}
      <div className='gap-9 sm:grid-cols-2'>
        <div className='flex flex-col gap-9'>
          {/* <!-- Input Fields --> */}
          <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
            <div className='border-b border-stroke py-4 px-6.5 dark:border-strokedark'>
              <h3 className='font-medium text-black dark:text-white'>
                Pin Registration Form
              </h3>
            </div>
            <div className='flex flex-col gap-5.5 p-6.5'>
              <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                <div className='w-full sm:w-1/2'>
                  <label
                    className='mb-3 block text-sm font-medium text-black dark:text-white'
                    htmlFor='fullName'
                  >
                    Institution Name
                  </label>
                  <div className='relative'>
                    <input
                      className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                      type='text'
                      name='insCode'
                      id='insCode'
                      placeholder='GW'
                      readonly
                    />
                  </div>
                </div>

                <div className='w-full sm:w-1/2'>
                  <label
                    className='mb-3 block text-sm font-medium text-black dark:text-white'
                    htmlFor='phoneNumber'
                  >
                    Item Unique Code
                  </label>
                  <input
                    className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='001'
                    defaultValue='001'
                  />
                </div>
              </div>
              <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                <div className='w-full sm:w-1/2'>
                  <label
                    className='mb-3 block text-sm font-medium text-black dark:text-white'
                    htmlFor='itemName'
                  >
                    Item Name
                  </label>
                  <input
                    className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type='text'
                    name='itemName'
                    id='itemName'
                    placeholder='Web Camera'
                  />
                </div>

                <div className='w-full sm:w-1/2'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                    Budget Source Code
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>101</option>
                      <option value=''>202</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                      <svg
                        className='fill-current'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.8'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                            fill=''
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                <div className='w-full sm:w-1/2'>
                  <label
                    className='mb-3 block text-sm font-medium text-black dark:text-white'
                    htmlFor='fullName'
                  >
                    Item Category Code
                  </label>
                  <div className='relative'>
                    <input
                      className='w-full rounded border border-stroke bg-gray py-3 pl-11.5 pr-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                      type='text'
                      name='insCode'
                      id='insCode'
                      placeholder='4321'
                    />
                  </div>
                </div>

                <div className='w-full sm:w-1/2'>
                  <label
                    className='mb-3 block text-sm font-medium text-black dark:text-white'
                    htmlFor='phoneNumber'
                  >
                    Item Subcategory
                  </label>
                  <input
                    className='w-full rounded border border-stroke bg-gray py-3 px-4.5 text-black focus:border-primary focus-visible:outline-none dark:border-strokedark dark:bg-meta-4 dark:text-white dark:focus:border-primary'
                    type='text'
                    name='phoneNumber'
                    id='phoneNumber'
                    placeholder='53'
                  />
                </div>
              </div>
              <div className='mb-5.5 flex flex-col gap-5.5 sm:flex-row'>
                <div className='w-full sm:w-1/2'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                    Item Place Code
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>B-10</option>
                      <option value=''>B-11</option>
                      <option value=''>B-12</option>
                      <option value=''>B-13</option>
                      <option value=''>B-14</option>
                      <option value=''>B-15</option>
                      <option value=''>B-16</option>
                      <option value=''>B-17</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                      <svg
                        className='fill-current'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.8'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                            fill=''
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className='w-full sm:w-1/2'>
                  <label className='mb-2.5 block text-black dark:text-white'>
                    Assigned Department
                  </label>
                  <div className='relative z-20 bg-transparent dark:bg-form-input'>
                    <select className='relative z-20 w-full appearance-none rounded border border-stroke bg-transparent py-3 px-5 outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'>
                      <option value=''>COM</option>
                      <option value=''>iEX</option>
                      <option value=''>EAST</option>
                      <option value=''>EEO</option>
                      <option value=''>ICT</option>
                    </select>
                    <span className='absolute top-1/2 right-4 z-30 -translate-y-1/2'>
                      <svg
                        className='fill-current'
                        width='24'
                        height='24'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <g opacity='0.8'>
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M5.29289 8.29289C5.68342 7.90237 6.31658 7.90237 6.70711 8.29289L12 13.5858L17.2929 8.29289C17.6834 7.90237 18.3166 7.90237 18.7071 8.29289C19.0976 8.68342 19.0976 9.31658 18.7071 9.70711L12.7071 15.7071C12.3166 16.0976 11.6834 16.0976 11.2929 15.7071L5.29289 9.70711C4.90237 9.31658 4.90237 8.68342 5.29289 8.29289Z'
                            fill=''
                          ></path>
                        </g>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              <div className='flex justify-end gap-4.5'>
                <button
                  className='flex justify-center rounded border border-stroke py-2 px-6 font-medium text-black hover:shadow-1 dark:border-strokedark dark:text-white'
                  type='submit'
                >
                  Cancel
                </button>
                <button
                  className='flex justify-center rounded bg-primary py-2 px-6 font-medium text-gray hover:bg-opacity-70'
                  type='submit'
                >
                  Add Item
                </button>
              </div>

            </div>
          </div>

        </div>


      </div>
      {/* <!-- ====== AddItems Section End ====== --> */}
    </DefaultLayout>
  )
}

export default AddItems;
