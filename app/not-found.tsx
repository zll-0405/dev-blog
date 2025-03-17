import Image from "next/image";

// 添加一个导出变量，用于标识这是404页面
export const is404Page = true;

export default function NotFound() {
  return (
    <div className="mx-automax-h-screen flex flex-col items-center">
      <Image src="/404.svg" alt="404" width={256} height={256} />
      <div className="text-center mt-4 flex flex-col sm:flex-row">
        <p>
          <a href="https://lulubiu.com" className="text-slate-300 hover:text-sky-400">
            回到首页
          </a>
        </p>
      </div>
    </div>
  );
}
