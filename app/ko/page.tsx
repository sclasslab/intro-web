export default function Page() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      
      {/* hero */}
      <section className="mx-auto max-w-6xl px-4 pt-16 pb-20 md:flex md:items-center md:gap-10">
        <div className="md:w-1/2">
          <p className="inline-flex items-center gap-2 rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-900 mb-6">
            AI Healthcare · Medical Signal Processing · EdTech
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl lg:text-5xl">
            의료와 학습을 AI로<br /> 만드는 연구형 스타트업
          </h1>
          <p className="mt-5 text-base text-slate-600 md:text-lg">
            S-Class Lab은 치과·의료 현장의 실제 데이터를 기반으로
            진단을 보조하는 AI와, 사람의 학습 행동을 이해하는 교육용 AI를 함께 개발합니다.
            임상에서 바로 쓸 수 있고, 글로벌 파트너에게 소개할 수 있는 수준을 목표로 합니다.
          </p>
          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-800"
            >
              프로젝트 상담하기
            </a>
            <a
              href="#solutions"
              className="rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-100"
            >
              솔루션 보기
            </a>
          </div>
          <p className="mt-5 text-xs text-slate-500">
            · NVIDIA Inception 준비 중
          </p>
        </div>
        <div className="mt-10 rounded-2xl bg-white p-5 shadow-lg ring-1 ring-slate-100 md:mt-0 md:w-1/2">
          <div className="rounded-xl bg-gradient-to-br from-teal-50 to-cyan-50 p-5">
            <p className="text-xs font-semibold text-slate-500 mb-3">
              Real-time AI Diagnostic Flow
            </p>
            <div className="space-y-3">
              <div className="rounded-lg bg-white/80 px-4 py-3">
                <p className="text-xs text-slate-500">Step 1</p>
                <p className="text-sm font-semibold text-slate-900">이미지 / 신호 입력</p>
              </div>
              <div className="rounded-lg bg-white/80 px-4 py-3">
                <p className="text-xs text-slate-500">Step 2</p>
                <p className="text-sm font-semibold text-slate-900">3D Reconstruction · Feature Stabilization</p>
              </div>
              <div className="rounded-lg bg-slate-900 px-4 py-3">
                <p className="text-xs text-slate-200">Step 3</p>
                <p className="text-sm font-semibold text-white">의사 컨펌용 진단 리포트 출력</p>
              </div>
            </div>
          </div>
          <p className="mt-5 text-xs text-slate-400">
            실제 S-Class Dental Clinic 환경에서 검증 중
          </p>
        </div>
      </section>

      {/* about */}
      <section id="about" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">S-Class Lab 소개</h2>
          <p className="mt-4 max-w-3xl text-slate-600">
            우리는 의료 영상 및 신호 처리 알고리즘, 인공지능 기반 진단 소프트웨어, 교육용 AI 학습 플랫폼을 연구·개발하는 팀입니다.
            임상 치과에서 실제로 발생하는 데이터와 워크플로를 기반으로 하기 때문에, 현장에서 사용할 수 있는 형태로 빠르게 제품화할 수 있습니다.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">AI 진단 소프트웨어</h3>
              <p className="mt-2 text-sm text-slate-600">
                치과 및 의료 영상에서 병변 후보를 자동 검출하고, 의사가 컨펌할 수 있는 리포트를 생성합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">의료 신호·영상 처리</h3>
              <p className="mt-2 text-sm text-slate-600">
                초음파, CBCT 등 다양한 모달리티의 신호를 안정적으로 전처리하고 3D로 재구성합니다.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <h3 className="text-sm font-semibold text-slate-900">교육용 AI 플랫폼</h3>
              <p className="mt-2 text-sm text-slate-600">
                masked cloze 기법을 사람 학습에 적용해 수능/LEET/TOEFL 등 시험 대비를 고도화합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* solutions */}
      <section id="solutions" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-2xl font-semibold text-slate-900">주요 솔루션</h2>
            <p className="text-sm text-slate-500">Clinic → R&D → Product까지 이어지는 구조</p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Cure & Care AI */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-cyan-500 mb-2">Healthcare AI</p>
              <h3 className="text-base font-semibold text-slate-900">Cure & Care AI</h3>
              <p className="mt-2 text-sm text-slate-600">
                진단 보조용 AI 엔진. 병변 확률, 영역 표시, 의사 코멘트용 포맷까지 자동 생성합니다.
              </p>
              <p className="mt-auto text-xs text-slate-400">Realtime-ready · TensorRT · CUDA</p>
            </div>
            {/* NTDC */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-teal-500 mb-2">R&D Platform</p>
              <h3 className="text-base font-semibold text-slate-900">NTDC (Neural Tech Development Center)</h3>
              <p className="mt-2 text-sm text-slate-600">
                3D Transformer, flow-matching 기반 의료용 모델을 실험하는 연구 허브입니다.
              </p>
              <p className="mt-auto text-xs text-slate-400">Multi-GPU · Real-time video processing</p>
            </div>
            {/* AI Education */}
            <div className="flex flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-sm">
              <p className="text-xs font-semibold text-slate-500 mb-2">EdTech AI</p>
              <h3 className="text-base font-semibold text-slate-900">Adaptive Learning App</h3>
              <p className="mt-2 text-sm text-slate-600">
                시험 유형별로 난도를 조절하고, 사람이 틀릴 만한 어휘·구문을 masking해 반복 학습시킵니다.
              </p>
              <p className="mt-auto text-xs text-slate-400">CSAT · LEET · TOEFL · GRE</p>
            </div>
          </div>
        </div>
      </section>

      {/* research / partners */}
      <section id="research" className="bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-semibold text-slate-900">R&D & Infra</h2>
          <p className="mt-4 max-w-2xl text-slate-600">
            Spiking Transformer, epsilon-constrained random layer, 의료용 3D reconstruction 등
            차세대 AI 아키텍처를 자체 PoC로 구현해 임상에 맞게 변형하고 있습니다.
            NVIDIA Inception 합류 후에는 GPU 기반 대용량 학습과 글로벌 협업을 확대할 계획입니다.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">GPU Ready</p>
              <p className="mt-2 text-sm text-slate-700">
                CUDA, cuDNN, TensorRT 기반으로 최적화된 학습·추론 파이프라인
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">Clinical Data</p>
              <p className="mt-2 text-sm text-slate-700">
                S-Class Dental Clinic의 실제 진료 흐름을 반영한 데이터 수집
              </p>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-slate-50/50 p-6">
              <p className="text-xs font-semibold text-slate-500">Patent / IP</p>
              <p className="mt-2 text-sm text-slate-700">
                표준편차 기반 선택적 e-제약 랜덤화 레이어 등 특허화 진행
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* contact */}
      <section id="contact" className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-2xl bg-slate-900 px-6 py-10 text-white md:flex md:items-center md:justify-between md:gap-8">
            <div>
              <h2 className="text-2xl font-semibold">프로젝트 / 제휴 문의</h2>
              <p className="mt-3 text-sm text-slate-200">
                의료 AI, 교육 AI, 멀티 GPU 실시간 비디오 처리 관련 PoC/공동연구를 진행 중입니다.
                도입·연구·투자 제안 모두 아래 메일로 연락 주세요.
              </p>
              <p className="mt-4 text-sm font-mono">ceo@sclasslab.com · dev@sclasslab.com</p>
            </div>
            <div className="mt-6 md:mt-0">
              <a
                href="mailto:ceo@sclasslab.com"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100"
              >
                메일 보내기
                <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
          <p className="mt-6 text-center text-xs text-slate-400">
            © {new Date().getFullYear()} S-Class Lab Inc. All rights reserved.
          </p>
        </div>
      </section>
    </div>
  );
}