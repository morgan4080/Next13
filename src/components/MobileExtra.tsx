const MobileExtra = () => {
    return (
        <ul className="list-none list-inside">
            <li>
                <a className="lg:text-sm leading-6 dark:text-gray-300 hover:text-sky-500" target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=com.presta.prestasign">
                    <span className="underline">Presta Sign</span>
                    <span>: A mobile application designed for members of a savings and credit cooperative (Sacco). The app streamlines the loan application process, making it quicker and more convenient for members to apply for loans. With Presta Sign, members can create loan requests, find guarantors, and sign digital loan application forms from their mobile devices.</span>
                </a>
            </li>
            <li>
                <a className="lg:text-sm leading-6 dark:text-gray-300 hover:text-sky-500" target="_blank" rel="noreferrer noopener" href="https://play.google.com/store/apps/details?id=ke.co.presta.lender">
                    <span className="underline">Presta Lender</span>
                    <span>: A mobile app that supports back office tasks for lending entities, it offers real time alerts for key events such as loan applications, loan payments, onboarding, customer limits, withdrawals and deposits.</span>
                </a>
            </li>
        </ul>
    )
}

export default MobileExtra
