/* eslint-disable react/prop-types */


export default function JobFiled({ filedName, icon, filedValue}) {
	return <div className="mt-6 flex items-start gap-[10px]">
    <img src={icon} alt="" />
    <h5 className="text-[20px] text-dark2 font-bold">{filedName}: <span className="text-dark3 font-medium">{filedValue}</span></h5>
  </div>;
}
