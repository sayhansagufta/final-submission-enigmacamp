const PopularNotes = ({ jmluser, title }) => {
    return (
        <div className="flex flex-col rounded-xl items-start w-[270px] h-[278px] p-6 gap-5 border border-gray-500 hover:border-[#FFB400]" data-aos="fade-up" data-aos-duration="1000">
            <div className="flex justify-center items-center rounded-xl w-40 h-40 p-4 bg-[#5647F9]">
                <img className="h-40" src="src/assets/svg/arrow.svg" alt="" />
            </div>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="font-light text-gray-500">Disimpan {jmluser} Pengguna</p>
            </div>
        </div>
    )
}
export default PopularNotes