import React from 'react'

export default function Table({heading,data}) {
    return (
        <div class="db-table-responsive">
                        <table class="db-table stripe" id="print">
                            <thead class="db-table-head">
                                <tr class="db-table-head-tr">
                                    {heading?.map((head)=>
                                    <th class="db-table-head-th"> {head}</th>
                                    )}
                                </tr>
                            </thead>
                            <tbody class="db-table-body" v-if="employees.length > 0">
                                {datas?.map((data)=>
                                <tr class="db-table-body-tr" v-for="employee in employees">
                                    <td class="db-table-body-td">test</td>
                                    <td class="db-table-body-td">lionel@fotso</td>
                                    <td class="db-table-body-td">ok</td>
                                    <td class="db-table-body-td">admin</td>
                                    <td class="db-table-body-td">
                                    ok
                                    </td>
                                    <td class="db-table-body-td hidden-print"
                                        v-if="permissionChecker('employees_show') || permissionChecker('employees_edit') || permissionChecker('employees_delete')">
                                        <div class="flex justify-start items-center sm:items-start sm:justify-start gap-1.5">
                                            <Link href="href" class="db-table-action edit">
                                                <i class="lab lab-line-edit"></i>
                                                <span class="db-tooltip">edit</span>
                                            </Link>
                                            {/* <SmIconSidebarModalEditComponent/> */}
                                            {/* <SmIconDeleteComponent/> */}
                                        </div>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
    )
}
