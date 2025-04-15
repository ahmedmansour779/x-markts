import React from 'react'
import Link from "next/link";

export default function ProductPagination() {
    return (
        <>
                    <ul className="tf-pagination-wrap tf-pagination-list tf-pagination-btn pb-5">
                        <li className="active">
                            <Link href="#" className="pagination-link">1</Link>
                        </li>
                        <li >
                            <Link  href="#" className="pagination-link animate-hover-btn">2</Link>
                        </li>
                        <li >
                            <Link href="#" className="pagination-link animate-hover-btn">3</Link>
                        </li>
                        <li >
                            <Link href="#" className="pagination-link animate-hover-btn">4</Link>
                        </li>
                        <li>
                            <Link  href="#" className="pagination-link animate-hover-btn">
                                <span className="icon icon-arrow-right" />
                            </Link>
                        </li>
                    </ul>
        </>
    )
}
