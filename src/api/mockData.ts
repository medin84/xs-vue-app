const sideNavItems = [{
    'item': 'Входящие',
    'id': 'entryindoc',
    'tid': 'indoc',
    'type': 'entry',
    'url': '',
    'hint': 'Входящие',
    'children': [{
        'item': 'На регистрацию',
        'id': 'linkeid-183896283',
        'tid': 'eid-183896283',
        'type': 'entry',
        'url': 'views/_common/allProjects.jsp?dbid=IncomingMailDB',
        'hint': 'На регистрацию'
      },
      {
        'item': 'Все документы',
        'id': 'linkeid-1125309213',
        'tid': 'eid-1125309213',
        'type': 'entry',
        'url': 'views/indoc/inAllDocuments.jsp',
        'hint': 'Все документы'
      },
      {
        'item': 'По дате регистрации',
        'id': 'linkeid-774362529',
        'tid': 'eid-774362529',
        'type': 'entry',
        'url': 'views/indoc/inByRegDate.jsp',
        'hint': 'По дате регистрации'
      },
      {
        'item': 'По корреспондентам',
        'id': 'linkeid-1395206040',
        'tid': 'eid-1395206040',
        'type': 'entry',
        'url': 'views/indoc/inByCorr.jsp',
        'hint': 'По корреспондентам'
      },
      {
        'item': 'По получателям',
        'id': 'linkeid-264169499',
        'tid': 'eid-264169499',
        'type': 'entry',
        'url': 'views/indoc/inByRecipient.jsp',
        'hint': 'По получателям'
      },
      {
        'item': 'По типу контроля',
        'id': 'linkeid-1975243047',
        'tid': 'eid-1975243047',
        'type': 'entry',
        'url': 'views/indoc/inByCtrlType.jsp',
        'hint': 'По типу контроля'
      },
      {
        'item': 'По отправителям из вышестоящих',
        'id': 'linkeid-980384114',
        'tid': 'eid-980384114',
        'type': 'entry',
        'url': 'views/indoc/inByHighOrg.jsp',
        'hint': 'По отправителям из вышестоящих'
      },
      {
        'item': 'По характеру вопроса',
        'id': 'linkeid-680935587',
        'tid': 'eid-680935587',
        'type': 'entry',
        'url': 'views/indoc/inByHar.jsp',
        'hint': 'По характеру вопроса'
      },
      {
        'item': 'По языку обращения',
        'id': 'linkeid-753791474',
        'tid': 'eid-753791474',
        'type': 'entry',
        'url': 'views/indoc/inByLang.jsp',
        'hint': 'По языку обращения'
      },
      {
        'item': 'Контроль',
        'id': 'subentryeid-1191006124',
        'tid': 'eid-1191006124',
        'type': 'subentry',
        'url': '',
        'hint': 'Контроль',
        'children': [{
            'item': 'По сроку исполнения',
            'id': 'linkeid-615698225',
            'tid': 'eid-615698225',
            'type': 'entry',
            'url': 'views/indoc/inByCtrlDate.jsp',
            'hint': 'По сроку исполнения'
          },
          {
            'item': 'Кол-во дней до исполнения',
            'id': 'linkeid-1736259588',
            'tid': 'eid-1736259588',
            'type': 'entry',
            'url': 'views/indoc/inByCtrlExecDate.jsp',
            'hint': 'Кол-во дней до исполнения'
          },
          {
            'item': 'По типу контроля',
            'id': 'linkeid-638725337',
            'tid': 'eid-638725337',
            'type': 'entry',
            'url': 'views/indoc/inByCtrlType.jsp',
            'hint': 'По типу контроля'
          }
        ]
      },
      {
        'item': 'Просроченные документы',
        'id': 'linkeid-123341755',
        'tid': 'eid-123341755',
        'type': 'entry',
        'url': 'views/indoc/inszAllDocumentsOverDue.jsp',
        'hint': 'Просроченные документы'
      }
    ]
  },
  {
    'item': 'Исходящие',
    'id': 'entryishdoc',
    'tid': 'ishdoc',
    'type': 'entry',
    'url': '',
    'hint': 'Исходящие',
    'children': [{
        'item': 'На регистрацию',
        'id': 'linkeid-860707521',
        'tid': 'eid-860707521',
        'type': 'entry',
        'url': 'views/_common/allProjects.jsp?dbid=OutgoingMailDB',
        'hint': 'На регистрацию'
      },
      {
        'item': 'Все документы',
        'id': 'linkeid-118638369',
        'tid': 'eid-118638369',
        'type': 'entry',
        'url': 'views/ishdoc/ishAllDocuments.jsp',
        'hint': 'Все документы'
      },
      {
        'item': 'По виду отправки',
        'id': 'linkeid-94597850',
        'tid': 'eid-94597850',
        'type': 'entry',
        'url': 'views/ishdoc/ishByDeliveryType.jsp',
        'hint': 'По виду отправки'
      },
      {
        'item': 'По дате регистрации',
        'id': 'linkeid-1946854337',
        'tid': 'eid-1946854337',
        'type': 'entry',
        'url': 'views/ishdoc/ishByRegDate.jsp',
        'hint': 'По дате регистрации'
      },
      {
        'item': 'По департаментам',
        'id': 'linkeid-1875150889',
        'tid': 'eid-1875150889',
        'type': 'entry',
        'url': 'views/ishdoc/ishByAuthorDep.jsp',
        'hint': 'По департаментам'
      },
      {
        'item': 'По получателям',
        'id': 'linkeid-1592978984',
        'tid': 'eid-1592978984',
        'type': 'entry',
        'url': 'views/ishdoc/ishByRecipient.jsp',
        'hint': 'По получателям'
      },
      {
        'item': 'По исполнителям',
        'id': 'linkeid-686069811',
        'tid': 'eid-686069811',
        'type': 'entry',
        'url': 'views/ishdoc/ishByAuthorRus.jsp',
        'hint': 'По исполнителям'
      },
      {
        'item': 'По номенклатуре',
        'id': 'linkeid-666975355',
        'tid': 'eid-666975355',
        'type': 'entry',
        'url': 'views/ishdoc/ishByNomenType.jsp',
        'hint': 'По номенклатуре'
      }
    ]
  },
  {
    'item': 'Приказы',
    'id': 'entryord',
    'tid': 'ord',
    'type': 'entry',
    'url': '',
    'hint': 'Приказы',
    'children': [{
        'item': 'На регистрацию',
        'id': 'linkeid-850405289',
        'tid': 'eid-850405289',
        'type': 'entry',
        'url': 'views/_common/allProjects.jsp?dbid=OrderDBLight',
        'hint': 'На регистрацию'
      },
      {
        'item': 'Просроченные документы',
        'id': 'linkeid-375061118',
        'tid': 'eid-375061118',
        'type': 'entry',
        'url': 'views/ord/ordAllDocumentsOverDue.jsp',
        'hint': 'Просроченные документы'
      },
      {
        'item': 'Все документы',
        'id': 'linkeid-527060132',
        'tid': 'eid-527060132',
        'type': 'entry',
        'url': 'views/ord/ordAllDocuments.jsp',
        'hint': 'Все документы'
      },
      {
        'item': 'Исполненные',
        'id': 'linkeid-359413363',
        'tid': 'eid-359413363',
        'type': 'entry',
        'url': 'views/ord/ordAllControlReset.jsp',
        'hint': 'Исполненные'
      },
      {
        'item': 'На исполнении',
        'id': 'linkeid-1622322361',
        'tid': 'eid-1622322361',
        'type': 'entry',
        'url': 'views/ord/ordAllControl.jsp',
        'hint': 'На исполнении'
      },
      {
        'item': 'По типу',
        'id': 'linkeid-1527840274',
        'tid': 'eid-1527840274',
        'type': 'entry',
        'url': 'views/ord/ordByType.jsp',
        'hint': 'По типу'
      },
      {
        'item': 'По подготовителю',
        'id': 'linkeid-1808625794',
        'tid': 'eid-1808625794',
        'type': 'entry',
        'url': 'views/ord/ordByPreparePerson.jsp',
        'hint': 'По подготовителю'
      },
      {
        'item': 'По автору подписи',
        'id': 'linkeid-1119796931',
        'tid': 'eid-1119796931',
        'type': 'entry',
        'url': 'views/ord/ordBySigner.jsp',
        'hint': 'По автору подписи'
      },
      {
        'item': 'По сроку исполнения',
        'id': 'linkeid-836814156',
        'tid': 'eid-836814156',
        'type': 'entry',
        'url': 'views/ord/ordByCtrlDate.jsp',
        'hint': 'По сроку исполнения'
      },
      {
        'item': 'По исполнителям',
        'id': 'linkeid-914924313',
        'tid': 'eid-914924313',
        'type': 'entry',
        'url': 'views/ord/ordByExec.jsp',
        'hint': 'По исполнителям'
      },
      {
        'item': 'По дате регистрации',
        'id': 'linkeid-1468165392',
        'tid': 'eid-1468165392',
        'type': 'entry',
        'url': 'views/ord/ordByRegDate.jsp',
        'hint': 'По дате регистрации'
      }
    ]
  },
  {
    'item': 'Договора',
    'id': 'entrycontracts',
    'tid': 'contracts',
    'type': 'entry',
    'url': '',
    'hint': 'Договора',
    'children': [{
        'item': 'На регистрацию',
        'id': 'linkeid-2124015014',
        'tid': 'eid-2124015014',
        'type': 'entry',
        'url': 'views/_common/allProjects.jsp?dbid=ContractsDB',
        'hint': 'На регистрацию'
      },
      {
        'item': 'По дате регистрации',
        'id': 'linkeid-34161041',
        'tid': 'eid-34161041',
        'type': 'entry',
        'url': 'views/contracts/contractByRegDate.jsp',
        'hint': 'По дате регистрации'
      },
      {
        'item': 'Все документы',
        'id': 'linkeid-192444398',
        'tid': 'eid-192444398',
        'type': 'entry',
        'url': 'views/contracts/contractsAllDocuments.jsp',
        'hint': 'Все документы'
      },
      {
        'item': 'По статусу',
        'id': 'linkeid-1926025517',
        'tid': 'eid-1926025517',
        'type': 'entry',
        'url': 'views/contracts/contractByStatus.jsp',
        'hint': 'По статусу'
      },
      {
        'item': 'По исполнителям',
        'id': 'linkeid-766379610',
        'tid': 'eid-766379610',
        'type': 'entry',
        'url': 'views/contracts/contractByExecutor.jsp',
        'hint': 'По исполнителям'
      },
      {
        'item': 'По заказчику',
        'id': 'linkeid-1643019260',
        'tid': 'eid-1643019260',
        'type': 'entry',
        'url': 'views/contracts/contractByCustomer.jsp',
        'hint': 'По заказчику'
      }
    ]
  },
  {
    'item': 'Служебные записки',
    'id': 'entryintdoc',
    'tid': 'intdoc',
    'type': 'entry',
    'url': '',
    'hint': 'Служебные записки',
    'children': [{
        'item': 'Все документы',
        'id': 'linkeid-360300362',
        'tid': 'eid-360300362',
        'type': 'entry',
        'url': 'views/intdoc/inszAllDocuments.jsp',
        'hint': 'Все документы'
      },
      {
        'item': 'По получателям',
        'id': 'linkeid-1238254817',
        'tid': 'eid-1238254817',
        'type': 'entry',
        'url': 'views/intdoc/inszByRecipient.jsp',
        'hint': 'По получателям'
      },
      {
        'item': 'По отправителям',
        'id': 'linkeid-413908911',
        'tid': 'eid-413908911',
        'type': 'entry',
        'url': 'views/intdoc/inszByCorr.jsp',
        'hint': 'По отправителям'
      },
      {
        'item': 'Просроченные документы',
        'id': 'linkeid-1118336227',
        'tid': 'eid-1118336227',
        'type': 'entry',
        'url': 'views/intdoc/inszAllDocumentsOverDue.jsp',
        'hint': 'Просроченные документы'
      }
    ]
  },
  {
    'item': 'Протоколы',
    'id': 'entryprotocol',
    'tid': 'protocol',
    'type': 'entry',
    'url': '',
    'hint': 'Протоколы',
    'children': [{
      'item': 'Все документы',
      'id': 'subentryeid-55636446',
      'tid': 'eid-55636446',
      'type': 'subentry',
      'url': '',
      'hint': 'Все документы',
      'children': [{
          'item': 'По исполнителям',
          'id': 'linkeid-179251390',
          'tid': 'eid-179251390',
          'type': 'entry',
          'url': 'views/protocol/taskByExec.jsp',
          'hint': 'По исполнителям'
        },
        {
          'item': 'Уполномоченный орган',
          'id': 'linkeid-784448894',
          'tid': 'eid-784448894',
          'type': 'entry',
          'url': 'views/protocol/protocolAllDocuments.jsp',
          'hint': 'Уполномоченный орган'
        },
        {
          'item': 'По автору',
          'id': 'linkeid-510724595',
          'tid': 'eid-510724595',
          'type': 'entry',
          'url': 'views/protocol/protocolAllDocsByAuthor.jsp',
          'hint': 'По автору'
        },
        {
          'item': 'По дате протокола',
          'id': 'linkeid-2050087669',
          'tid': 'eid-2050087669',
          'type': 'entry',
          'url': 'views/protocol/protocolAllDocsByDvn.jsp',
          'hint': 'По дате протокола'
        }
      ]
    }]
  },
  {
    'item': 'Проекты документов',
    'id': 'entryworkdocs',
    'tid': 'workdocs',
    'type': 'entry',
    'url': '',
    'hint': 'Проекты документов',
    'children': [{
        'item': 'Служебные записки',
        'id': 'subentryproject_workdocs',
        'tid': 'project_workdocs',
        'type': 'subentry',
        'url': '',
        'hint': 'Служебные записки',
        'children': [{
            'item': 'Просроченные',
            'id': 'linkeid-1588243576',
            'tid': 'eid-1588243576',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsExpired.jsp',
            'hint': 'Просроченные'
          },
          {
            'item': 'Все служебные записки',
            'id': 'linkeid-290377568',
            'tid': 'eid-290377568',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocs.jsp',
            'hint': 'Все служебные записки'
          },
          {
            'item': 'По папкам',
            'id': 'linkeid-669063423',
            'tid': 'eid-669063423',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsByFolder.jsp',
            'hint': 'По папкам'
          },
          {
            'item': 'По дате регистрации',
            'id': 'linkeid-155528632',
            'tid': 'eid-155528632',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsByRegDate.jsp',
            'hint': 'По дате регистрации'
          },
          {
            'item': 'По департаментам',
            'id': 'linkeid-1354002316',
            'tid': 'eid-1354002316',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsBySenderDepartment.jsp',
            'hint': 'По департаментам'
          },
          {
            'item': 'По отправителям',
            'id': 'linkeid-204344665',
            'tid': 'eid-204344665',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsByAuthor.jsp',
            'hint': 'По отправителям'
          },
          {
            'item': 'По получателям',
            'id': 'linkeid-1651827864',
            'tid': 'eid-1651827864',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsByRecipient.jsp',
            'hint': 'По получателям'
          },
          {
            'item': 'По номенклатуре дел',
            'id': 'linkeid-780947801',
            'tid': 'eid-780947801',
            'type': 'entry',
            'url': 'views/projects/workdocs/workdocsByNomen.jsp',
            'hint': 'По номенклатуре дел'
          }
        ]
      },
      {
        'item': 'Договоры',
        'id': 'subentryproject_contracts',
        'tid': 'project_contracts',
        'type': 'subentry',
        'url': '',
        'hint': 'Договоры',
        'children': [{
            'item': 'Все договоры',
            'id': 'linkeid-2049413841',
            'tid': 'eid-2049413841',
            'type': 'entry',
            'url': 'views/projects/contracts/contracts.jsp',
            'hint': 'Все договоры'
          },
          {
            'item': 'По дате исполнителя',
            'id': 'linkeid-1849927116',
            'tid': 'eid-1849927116',
            'type': 'entry',
            'url': 'views/projects/contracts/contractsByExecutor.jsp',
            'hint': 'По дате исполнителя'
          },
          {
            'item': 'По контрагенту',
            'id': 'linkeid-241337641',
            'tid': 'eid-241337641',
            'type': 'entry',
            'url': 'views/projects/contracts/contractsByOtherSide.jsp',
            'hint': 'По контрагенту'
          }
        ]
      },
      {
        'item': 'Доп.соглашения',
        'id': 'subentryproject_agreements',
        'tid': 'project_agreements',
        'type': 'subentry',
        'url': '',
        'hint': 'Доп.соглашения',
        'children': [{
            'item': 'Все соглашения',
            'id': 'linkeid-1563092122',
            'tid': 'eid-1563092122',
            'type': 'entry',
            'url': 'views/projects/agreements/agreements.jsp',
            'hint': 'Все соглашения'
          },
          {
            'item': 'По дате регистрации',
            'id': 'linkeid-577270795',
            'tid': 'eid-577270795',
            'type': 'entry',
            'url': 'views/projects/agreements/agreementsByRegDate.jsp',
            'hint': 'По дате регистрации'
          },
          {
            'item': 'По исполнителям',
            'id': 'linkeid-1929483620',
            'tid': 'eid-1929483620',
            'type': 'entry',
            'url': 'views/projects/agreements/agreementsByExecutor.jsp',
            'hint': 'По исполнителям'
          }
        ]
      },
      {
        'item': 'Приказы',
        'id': 'subentryproject_orders',
        'tid': 'project_orders',
        'type': 'subentry',
        'url': '',
        'hint': 'Приказы',
        'children': [{
            'item': 'Все приказы',
            'id': 'linkeid-651962611',
            'tid': 'eid-651962611',
            'type': 'entry',
            'url': 'views/projects/orders/orders.jsp',
            'hint': 'Все приказы'
          },
          {
            'item': 'По дате регистрации',
            'id': 'linkeid-349163025',
            'tid': 'eid-349163025',
            'type': 'entry',
            'url': 'views/projects/orders/ordersByRegDate.jsp',
            'hint': 'По дате регистрации'
          },
          {
            'item': 'По типу',
            'id': 'linkeid-1646057155',
            'tid': 'eid-1646057155',
            'type': 'entry',
            'url': 'views/projects/orders/ordersByType.jsp',
            'hint': 'По типу'
          },
          {
            'item': 'По департаментам',
            'id': 'linkeid-122390957',
            'tid': 'eid-122390957',
            'type': 'entry',
            'url': 'views/projects/orders/ordersByAuthorDep.jsp',
            'hint': 'По департаментам'
          }
        ]
      },
      {
        'item': 'Исходящие',
        'id': 'subentryproject_outgoing',
        'tid': 'project_outgoing',
        'type': 'subentry',
        'url': '',
        'hint': 'Исходящие',
        'children': [{
            'item': 'Все исходящие',
            'id': 'linkeid-1085739279',
            'tid': 'eid-1085739279',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoing.jsp',
            'hint': 'Все исходящие'
          },
          {
            'item': 'По папкам',
            'id': 'linkeid-24038346',
            'tid': 'eid-24038346',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingByFolder.jsp',
            'hint': 'По папкам'
          },
          {
            'item': 'Ответные',
            'id': 'linkeid-564785239',
            'tid': 'eid-564785239',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingResponses.jsp',
            'hint': 'Ответные'
          },
          {
            'item': 'По дате регистрации',
            'id': 'linkeid-243097362',
            'tid': 'eid-243097362',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingByRegDate.jsp',
            'hint': 'По дате регистрации'
          },
          {
            'item': 'По департаментам',
            'id': 'linkeid-1779263345',
            'tid': 'eid-1779263345',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingByAuthorDep.jsp',
            'hint': 'По департаментам'
          },
          {
            'item': 'По исполнителям',
            'id': 'linkeid-311783497',
            'tid': 'eid-311783497',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingByAuthorRus.jsp',
            'hint': 'По исполнителям'
          },
          {
            'item': 'По получателям',
            'id': 'linkeid-1641813269',
            'tid': 'eid-1641813269',
            'type': 'entry',
            'url': 'views/projects/outgoing/outgoingByRecipients.jsp',
            'hint': 'По получателям'
          }
        ]
      },
      {
        'item': 'Протоколы',
        'id': 'subentryproject_protocol',
        'tid': 'project_protocol',
        'type': 'subentry',
        'url': '',
        'hint': 'Протоколы',
        'children': [{
            'item': 'Протоколы',
            'id': 'linkeid-1279966705',
            'tid': 'eid-1279966705',
            'type': 'entry',
            'url': 'views/projects/protocols/protocolsProjects.jsp',
            'hint': 'Протоколы'
          },
          {
            'item': 'Протоколы по дате регистрации',
            'id': 'linkeid-1742849853',
            'tid': 'eid-1742849853',
            'type': 'entry',
            'url': 'views/projects/protocols/protocolsByRegDate.jsp',
            'hint': 'Протоколы по дате регистрации'
          }
        ]
      }
    ]
  }
]

const authSession = {
  orgName: 'MT',
  title: 'Title',
  logo: '/dist/logo.png',
  theme: 'cinzento',
  isAuthenticated: true,
  user: {
    name: '',
    theme: 'cinzento',
    displayMailLink: false,
    mailLink: ''
  },
  sidenav: sideNavItems
}

const unAuthsession: any = {
  orgName: 'MT',
  title: 'Title',
  logo: '/dist/logo.png',
  theme: 'cinzento',
  isAuthenticated: false
}

export default {
  authSession,
  unAuthsession
}
