﻿using Projeto_Roman_API.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Projeto_Roman_API.Interfaces
{
    interface ITemaRepository
    {
        List<Tema> Listar();
    }
}
