var documenterSearchIndex = {"docs":
[{"location":"api/InsuranceTariffs/#InsuranceTariffs.jl","page":"Tariff","title":"InsuranceTariffs.jl","text":"","category":"section"},{"location":"api/InsuranceTariffs/","page":"Tariff","title":"Tariff","text":"Modules = [InsuranceTariffs]","category":"page"},{"location":"api/InsuranceTariffs/#LifeInsuranceDataModel.InsuranceTariffs.Tariff","page":"Tariff","title":"LifeInsuranceDataModel.InsuranceTariffs.Tariff","text":"Tariff\n\na component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceTariffs/#LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRole","page":"Tariff","title":"LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRole","text":"TariffPartnerRole\n\na subcomponent of a tariff entity   enumerationg the roles of tariff partners\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceTariffs/#LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRoleRevision","page":"Tariff","title":"LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRoleRevision","text":"TariffPartnerRoleRevision\n\na partner role revision of a Tariff component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceTariffs/#LifeInsuranceDataModel.InsuranceTariffs.TariffRevision","page":"Tariff","title":"LifeInsuranceDataModel.InsuranceTariffs.TariffRevision","text":"Tariff_Revision\n\na revision of a Tariff component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceTariffs/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRoleRevision}","page":"Tariff","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::TariffPartnerRoleRevision) :: Type{TariffPartnerRole}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceTariffs/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceTariffs.TariffRevision}","page":"Tariff","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::TariffRevision) :: Type{Tariff}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceTariffs/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceTariffs.TariffPartnerRole}","page":"Tariff","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::TariffPartnerRole) :: Type{TariffPartnerRoleRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceTariffs/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceTariffs.Tariff}","page":"Tariff","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::Tariff) :: Type{TariffRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceTariffs/#BitemporalPostgres.revisionTypes-Tuple{Val{:Tariff}}","page":"Tariff","title":"BitemporalPostgres.revisionTypes","text":"BitemporalPostgres.revisionTypes(entity::Val{:Tariff})    defining the ComponentRevision types occurring in Contracts\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.jl","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.jl","text":"","category":"section"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"The notion of section is used here to describe object revisions as of a certain pair of points in - 2 dimensional - transaction and reference time. So it is a geometrical metaphor of two crossing cuts = i.e. sections - reducing 2D-transaction and reference time to 1D-reference time using a point in transaction time and reducing 1D-reference time using a point in reference time to yield a point in the version space.","category":"page"},{"location":"api/LifeInsuranceDataModel/#Customizing","page":"LifeInsuranceDataModel","title":"Customizing","text":"","category":"section"},{"location":"api/LifeInsuranceDataModel/#Adding-bitemporal-entities-and-components","page":"LifeInsuranceDataModel","title":"Adding bitemporal entities and components","text":"","category":"section"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"Current entities are Contract, Partner,Product,Tariff.","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"Create packages like InsuranceContracts.jl and include","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"it in LifeInsuranceDataModel.jl. Export Your new Symbols.","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"Create or update the enumeration function  to contain all subcomponents' revision types you assign or add to the root entity of type T:","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"BitemporalPostgresrevisionTypes(entityValT)VectorT where TSymbol Example:","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"BitemporalPostgresrevisionTypes(entityValContract)\nadd functions get_typeof_revision and get_typeof_component for the new revision and component.","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"Examples:","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"BitemporalPostgresget_typeof_revision(componentContract)  TypeContractRevision and\nBitemporalPostgresget_typeof_component(revisionContractRevision)  TypeContract\nAdd DDL for your entity or component in functions up and down of package DDL.jl \ncreate tables for your structs and\nand create constraints and triggers using the function createRevisionsTriggerAndConstraint(triggerSymbolconstraintSymboltableSymbol)","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"end","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"(Image: UML Model)","category":"page"},{"location":"api/LifeInsuranceDataModel/","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel","text":"Modules = [LifeInsuranceDataModel]","category":"page"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ContractPartnerReference","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ContractPartnerReference","text":"ContractPartnerReference \tholds attributes of the reference from contract and a partner section\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ContractSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ContractSection","text":"ContractSection \tContractSection is a section (see above) of a contract entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.PartnerSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.PartnerSection","text":"\" PartnerSection\n\nis a section (see above) of a Partner entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ProductItemProductReference","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ProductItemProductReference","text":"ProductItemProductReference is a reference from a ProductItem to a product entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ProductItemSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ProductItemSection","text":"ProductItemSection is a section (see above) of a ProductItem component\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ProductPartSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ProductPartSection","text":"ProductPartSection \n\nis a section (see above) of a ProductPart entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.ProductSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.ProductSection","text":"ProductSection \n\nis a section (see above) of a Product entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.TariffInterface","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.TariffInterface","text":"mutable struct TariffInterface\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.TariffItemPartnerReference","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.TariffItemPartnerReference","text":"TariffItemPartnerReference is a reference from a TariffItem to a Partner entity For instance, typically an insured person\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.TariffItemSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.TariffItemSection","text":"TariffItemSection is a section (see above) of a TariffItem component\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.TariffItemTariffReference","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.TariffItemTariffReference","text":"TariffItemTariffReference is a reference from a TariffItem to a Tariff entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.TariffSection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.TariffSection","text":"TariffSection \n\nis a section (see above) of a Tariff entity\n\n\n\n\n\n","category":"type"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.compareRevisions-Tuple{Any, Dict{String, Any}, Dict{String, Any}}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.compareRevisions","text":"compareRevisions(t, previous::Dict{String,Any}, current::Dict{String,Any}) where {T<:BitemporalPostgres.ComponentRevision} compare corresponding revision elements and return nothing if equal a pair of both else\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.connect-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.connect","text":"connect \tdatabase connect as configured \n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.connect0-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.connect0","text":"connect0 internal function for DB connect\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.csection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.csection","text":"csection(contractid::Integer, tsdbvalidfrom, tsworld_validfrom,activeTransaction::Integer=0)::ContractSectio\n\ncsection retrieves the section of a contract or throws NoVersionFound\n\n\n\n\n\n","category":"function"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.disconnect-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.disconnect","text":"disconnect \tdisconnect from database\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.get_contracts-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.get_contracts","text":"getcontracts \tgetcontracts retrieves all contract entities - search capabilities to be added \n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.get_partners-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.get_partners","text":"getpartners \tgetpartners retrieves all partner entities - search capabilities to be added \n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.get_products-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.get_products","text":"getproducts \tgetproducts retrieves all product entities - search capabilities to be added \n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.history_forest-Tuple{Int64}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.history_forest","text":"historyforest(historyid::Int) \thistory_forest retrieves a tree of ValidityIntervals see:BitemporalPostgres Theory\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.load_roles-Tuple{}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.load_roles","text":"load_roles \tcreate the role ids of the model's relations\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.persistModelStateContract-Tuple{Dict{String, Any}, Dict{String, Any}, BitemporalPostgres.Workflow, BitemporalPostgres.Component}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.persistModelStateContract","text":"persistModelStateContract(previous::Dict{String,Any}, current::Dict{String,Any}, w::Workflow, component::Component) \tpersist the delta between previous and current state into into the workflow context\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.pisection-Tuple{Integer, Integer, Any, Any}","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.pisection","text":"function pisection(historyid::Integer, versionid::Integer, tsdbvalidfrom, tsworldvalidfrom)::Vector{ProductItemSection}\n\npisection retrieves the vector of a contract's productitem sections\n\n\n\n\n\n","category":"method"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.prsection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.prsection","text":"prsection(productid::Integer, tsdbvalidfrom, tsworld_validfrom, activeTransaction::Integer=0)::ProductSection\n\nprsection retrieves a section of a product or throws NoVersionFound\n\n\n\n\n\n","category":"function"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.psection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.psection","text":"psection(partnerid::Integer, tsdbvalidfrom, tsworld_validfrom, activeTransaction::Integer=0)::PartnerSection\n\npsection retrieves a section of a partner  or throws NoVersionFound\n\n\n\n\n\n","category":"function"},{"location":"api/LifeInsuranceDataModel/#LifeInsuranceDataModel.tsection","page":"LifeInsuranceDataModel","title":"LifeInsuranceDataModel.tsection","text":"tsection(tariffid::Integer, tsdbvalidfrom, tsworld_validfrom, activeTransaction::Integer=0)::TariffSection\n\ntsection retrieves a section of a tariff or throws NoVersionFound\n\n\n\n\n\n","category":"function"},{"location":"api/InsuranceProducts/#InsuranceProducts.jl","page":"Product","title":"InsuranceProducts.jl","text":"","category":"section"},{"location":"api/InsuranceProducts/","page":"Product","title":"Product","text":"Modules = [InsuranceProducts]","category":"page"},{"location":"api/InsuranceProducts/#LifeInsuranceDataModel.InsuranceProducts.Product","page":"Product","title":"LifeInsuranceDataModel.InsuranceProducts.Product","text":"Product\n\na component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceProducts/#LifeInsuranceDataModel.InsuranceProducts.ProductPart","page":"Product","title":"LifeInsuranceDataModel.InsuranceProducts.ProductPart","text":"ProductPart\n\nthe relation between a product and it's component tariffs\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceProducts/#LifeInsuranceDataModel.InsuranceProducts.ProductPartRevision","page":"Product","title":"LifeInsuranceDataModel.InsuranceProducts.ProductPartRevision","text":"ProcuctPart_Revision\n\na revision of a ProductPart component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceProducts/#LifeInsuranceDataModel.InsuranceProducts.ProductPartRole","page":"Product","title":"LifeInsuranceDataModel.InsuranceProducts.ProductPartRole","text":"ProductPartRole\n\nrole e.g. main or supplemental risk like life and occupational disabilty, profit participation\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceProducts/#LifeInsuranceDataModel.InsuranceProducts.ProductRevision","page":"Product","title":"LifeInsuranceDataModel.InsuranceProducts.ProductRevision","text":"Procuct_Revision\n\na revision of a Product component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceProducts/#BitemporalPostgres.revisionTypes-Tuple{Val{:Product}}","page":"Product","title":"BitemporalPostgres.revisionTypes","text":"BitemporalPostgres.revisionTypes(entity::Val{:Product})    defining the ComponentRevision types occurring in Contracts\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#InsuranceContracts.jl","page":"Contract","title":"InsuranceContracts.jl","text":"","category":"section"},{"location":"api/InsuranceContracts/","page":"Contract","title":"Contract","text":"Modules = [InsuranceContracts]","category":"page"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.Contract","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.Contract","text":"Contract\n\na contract component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRef","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRef","text":"ContractPartnerRef\n\na partner reference of a contract component, i.e. policy holder, premium payer\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRefRevision","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRefRevision","text":"ContractPartnerRefRevision\n\na revision of a contract's partner reference\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRole","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRole","text":"ContractPartnerRole\n\nrole e.g. policy holder or premium payer\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ContractRevision","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ContractRevision","text":"ContractRevision\n\na revision of a contract component\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ProductItem","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ProductItem","text":"ProductItem\n\na productitem component of a contract component\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.ProductItemRevision","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.ProductItemRevision","text":"ProductItemRevision\n\na revision of a productitem component\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItem","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItem","text":"TariffItem\n\na reference to a tariff with contractual parameters\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRef","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRef","text":"TariffItemPartnerRef\n\na reference to a partner of a tariffitem, i.e. insured person\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRefRevision","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRefRevision","text":"TariffItemPartnerRefRevision\n\na revision of a productItem's partner reference\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRole","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRole","text":"TariffItemPartnerRole\n\nrole of Partner for tariffitem, 1. or 2. insured person\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItemRevision","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItemRevision","text":"TariffItemRevision\n\na revision of a tariffitem\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#LifeInsuranceDataModel.InsuranceContracts.TariffItemRole","page":"Contract","title":"LifeInsuranceDataModel.InsuranceContracts.TariffItemRole","text":"TariffItemRole\n\nrole e.g. main or supplemental risk like life and occupational disabilty\n\n\n\n\n\n","category":"type"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRefRevision}","page":"Contract","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::ContractPartnerRefRevision) :: Type{ContractPartnerRef}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceContracts.ContractRevision}","page":"Contract","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::ContractRevision) :: Type{Contract}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceContracts.ProductItemRevision}","page":"Contract","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::ProductItemRevision) :: Type{ProductItem}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRefRevision}","page":"Contract","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::TariffItemPartnerRefRevision) :: Type{TariffItemPartnerRef}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_component-Tuple{LifeInsuranceDataModel.InsuranceContracts.TariffItemRevision}","page":"Contract","title":"BitemporalPostgres.get_typeof_component","text":"BitemporalPostgres.gettypeofcomponent(revision::TariffItemRevision) :: Type{TariffItem}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceContracts.ContractPartnerRef}","page":"Contract","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::ContractPartnerRef) :: Type{ContractPartnerRefRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceContracts.Contract}","page":"Contract","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::Contract) :: Type{ContractRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceContracts.ProductItem}","page":"Contract","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::ProductItem) :: Type{ProductItemRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceContracts.TariffItemPartnerRef}","page":"Contract","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::TariffItemPartnerRef) :: Type{TariffItemPartnerRefRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.get_typeof_revision-Tuple{LifeInsuranceDataModel.InsuranceContracts.TariffItem}","page":"Contract","title":"BitemporalPostgres.get_typeof_revision","text":"BitemporalPostgres.gettypeofrevision(component::TariffItem) :: Type{TariffItemRevision}\n\n\n\n\n\n","category":"method"},{"location":"api/InsuranceContracts/#BitemporalPostgres.revisionTypes-Tuple{Val{:Contract}}","page":"Contract","title":"BitemporalPostgres.revisionTypes","text":"BitemporalPostgres.revisionTypes(entity::Val{:Contract})    defining the ComponentRevision types occurring in Contracts\n\n\n\n\n\n","category":"method"},{"location":"api/InsurancePartners/#InsurancePartners.jl","page":"Partner","title":"InsurancePartners.jl","text":"","category":"section"},{"location":"api/InsurancePartners/","page":"Partner","title":"Partner","text":"Modules = [InsurancePartners]","category":"page"},{"location":"api/InsurancePartners/#LifeInsuranceDataModel.InsurancePartners.Partner","page":"Partner","title":"LifeInsuranceDataModel.InsurancePartners.Partner","text":"Partner\n\na component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsurancePartners/#LifeInsuranceDataModel.InsurancePartners.PartnerRevision","page":"Partner","title":"LifeInsuranceDataModel.InsurancePartners.PartnerRevision","text":"Partner_Revision\n\na revision of a Partner component of a bitemporal entity\n\n\n\n\n\n","category":"type"},{"location":"api/InsurancePartners/#BitemporalPostgres.revisionTypes-Tuple{Val{:Partner}}","page":"Partner","title":"BitemporalPostgres.revisionTypes","text":"BitemporalPostgres.revisionTypes(entity::Val{:Partner})    defining the ComponentRevision types occurring in Contracts\n\n\n\n\n\n","category":"method"},{"location":"#LifeInsuranceDataModel.jl","page":"Home","title":"LifeInsuranceDataModel.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"(Image: Beware, Work In Progress)","category":"page"},{"location":"","page":"Home","title":"Home","text":"LifeInsuranceDataModel provides an API for a prototype bitemporal data model for life insurance contracts, partners, products and tariffs. (Image: UML Model)","category":"page"},{"location":"#Index","page":"Home","title":"Index","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"","category":"page"}]
}
