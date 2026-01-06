import { Card, CardContent } from "@/components/ui/card"
import { Award, BarChart3, CheckCircle2, Leaf, Sparkles, Target, TrendingUp, Users } from "lucide-react"

export default function NutritionistLandingPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-center space-x-2">
          <Leaf className="size-4"/>
          <div className="text-xl font-bold text-foreground">Tráfego pago para Nutris</div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-secondary/20">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col items-center text-center gap-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Publicidade Estratégica para Nutricionistas
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance max-w-4xl leading-tight">
              Transforme Sua Prática em uma <span className="text-primary">Referência Regional</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
              Descubra como nutricionistas estão multiplicando sua base de pacientes e faturamento através de
              publicidade de reconhecimento e tráfego pago qualificado.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 justify-center mt-12 w-full max-w-4xl">
              <div className="bg-white border p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">+250%</div>
                <div className="text-sm text-muted-foreground">Aumento Médio de Pacientes</div>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">Muito +</div>
                <div className="text-sm text-muted-foreground">Visibilidade</div>
              </div>
              <div className="bg-white border p-4 rounded-lg">
                <div className="text-3xl font-bold text-primary mb-2">Muito +</div>
                <div className="text-sm text-muted-foreground">Receita</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4" id="beneficios">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">
              Por Que Investir em Publicidade de Reconhecimento?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              A diferença entre ter uma agenda cheia e lutar por pacientes está na visibilidade estratégica.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Atração Constante de Pacientes</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Fluxo previsível de novos pacientes todos os meses através de anúncios segmentados para seu público
                  ideal.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Reconhecimento Regional</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Torne-se a nutricionista referência em sua região. Sua marca será reconhecida e lembrada.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Público Qualificado</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Alcance pessoas realmente interessadas em nutrição, emagrecimento e saúde na sua cidade.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Crescimento Escalável</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Aumente seu faturamento de forma previsível e sustentável com estratégias comprovadas.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Dados e Transparência</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Acompanhe cada centavo investido e o retorno gerado através de relatórios detalhados.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="w-12 h-12 bg-chart-3/10 rounded-lg flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-chart-3" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Autoridade Digital</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Construa sua presença online e seja percebida como especialista no mercado.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4" id="como-funciona">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Como Funciona Nossa Estratégia</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Um processo transparente e comprovado para transformar sua prática.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Análise e Estratégia</h3>
              <p className="text-muted-foreground leading-relaxed">
                Estudamos seu mercado local, concorrência e definimos o público ideal. Criamos campanhas personalizadas
                para seu nicho específico.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Campanhas Inteligentes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Lançamos anúncios em Meta Ads e Google Ads focados em reconhecimento de marca e conversão de pacientes
                qualificados.
              </p>
            </div>

            <div className="relative">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Otimização Contínua</h3>
              <p className="text-muted-foreground leading-relaxed">
                Monitoramos e ajustamos diariamente para maximizar resultados. Você recebe relatórios semanais com todas
                as métricas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">O Reconhecimento Que Você Merece</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Ao fazer parceria conosco, você não apenas ganha pacientes. Você constrói uma marca sólida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Você Será Reconhecida Como:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">A nutricionista referência em sua cidade</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Especialista confiável em emagrecimento e saúde</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Profissional com agenda sempre cheia</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Marca forte nas redes sociais e buscas do Google</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-primary text-primary-foreground">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-4">Benefícios da Parceria:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Gestor de tráfego dedicado exclusivo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Criação profissional de anúncios e criativos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Relatórios transparentes semanais</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">Suporte e consultoria estratégica contínua</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-secondary/30" id="contato">
        <div className="container mx-auto max-w-4xl">
          <Card className="border-2 border-primary">
            <CardContent className="pt-12 pb-12 text-center">
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                  <div>
                    <div className="font-semibold mb-1">Sem Contratos Longos</div>
                    <div className="text-muted-foreground">Flexibilidade total</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Resultados em 30 Dias</div>
                    <div className="text-muted-foreground">Ou devolvemos seu investimento</div>
                  </div>
                  <div>
                    <div className="font-semibold mb-1">Suporte Dedicado</div>
                    <div className="text-muted-foreground">Sempre disponível</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-xl font-bold mb-4">Tráfego pago para Nutris</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Especialistas em tráfego pago para nutricionistas que querem crescer.
              </p>
            </div>


          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tráfego pago para Nutris. Um serviço da ETC Digital - CNPJ 26.429.429/0001-10. Todos os direitos reservados.
          </div>
        </div>
      </footer>
    </div>
  )
}
